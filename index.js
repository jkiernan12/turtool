#! /usr/bin/env node

const { program } = require('commander');
const got = require('got')
const htmlparser2 = require("htmlparser2");
const CSSselect = require("css-select");
const opn = require('better-opn');
const inquirer = require("inquirer");
const render = require('dom-serializer').default;

const openPage = (items, type) => {
  opn('https://frontend.turing.edu/' + type + 's/' + items[0].children[0].attribs.href)
}

const makeSelection = (items, type) => {
  let names = items.map(item => item.children[0].children[0].data)
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'selected',
      message: `Which ${type} do you want to open?`,
      choices: names,
    },
  ])
  .then((answer) => {
    let index = names.indexOf(answer.selected);
    let matchedItem = [items[index]];
    openPage(matchedItem, type);
  });
}

const checkMatches = (items, type) => {
  if (!items.length) {
    console.log("Hmm, looks like we couldn't find anything. Try a different keyword")
  } else if (items.length > 1) {
     makeSelection(items, type)
  } else {
    openPage(items, type)
  }
}

const parseHTML = (data, keyword, type) => {
  let dom = htmlparser2.parseDocument(data);
  let matchedItems = CSSselect.selectAll(`.${type}`, dom)
  .filter(el => {
    return render(el).toLowerCase().includes(keyword);
    return el.children[0].children[0].data.toLowerCase().includes(keyword)
  })
  checkMatches(matchedItems, type)
}

program
  .description('open a Frontend Turing lesson or project')
  .command('open')
  .argument('<type>', 'type of resource searching for [p]roject or [l]esson')
  .argument('[keyword]', 'a keyword in the title of the project you are looking for')
  .action((type, keyword) => {
    if (type === 'p' || type === 'project') {
      got('https://frontend.turing.edu/projects/')
      .then(res => {
        parseHTML(res.body, keyword, 'project')
    }) 
    } else if (type === 'l' || type === 'lesson') {
      got('https://frontend.turing.edu/lessons/')
      .then(res => {
        parseHTML(res.body, keyword, 'lesson')
    })
  }
}
  );

  program.parse();