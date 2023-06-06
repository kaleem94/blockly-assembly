/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview All the custom JSON-related blocks defined in the custom
 * generator codelab.
 */

import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
  'type': 'object',
  'message0': '{ %1 %2 }',
  'args0': [
    {
      'type': 'input_dummy',
    },
    {
      'type': 'input_statement',
      'name': 'MEMBERS',
    },
  ],
  'output': null,
  'colour': 230,
},
{
  'type': 'member',
  'message0': '%1 %2 %3',
  'args0': [
    {
      'type': 'field_input',
      'name': 'MEMBER_NAME',
      'text': '',
    },
    {
      'type': 'field_label',
      'name': 'COLON',
      'text': ':',
    },
    {
      'type': 'input_value',
      'name': 'MEMBER_VALUE',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 230,
},
{
  'type': 'dd',
  'message0': '%1',
  'args0': [
    {
      'type': 'field_input',
      'name': 'NAME',
      'text': 'default'
    }
  ],
  'colour': 230,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'dotglobal',
  'message0': '.global %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'NAME',
      "check": "String"
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 230,
  'tooltip': 'global declaration',
  'helpUrl': ''
},
{
  "type": "label",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "gotoLabel",
      "text": "label"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "MEMBERS"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "Label",
  "helpUrl": ""
},
{
  "type": "move_register",
  "message0": "MOV to register R %1 , value %2",
  "args0": [
    {
      "type": "field_number",
      "name": "Register",
      "value": 0,
      "min": 0
    },
    {
      "type": "field_input",
      "name": "value",
      "text": "0x00"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "swi_interrupt",
  "message0": "SWI %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "0x00"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dotdata",
  "message0": ".data %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "MEMBERS"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "Label",
  "helpUrl": ""
},

{
  "type": "dot_word",
  "message0": ".word %1",
  "args0": [
    {
      "type": "field_input",
      "name": "array",
      "text": "0"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "list_new",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "data_name"
    },
    {
      "type": "field_dropdown",
      "name": "length_type",
      "options": [
        [
          "word",
          ".word"
        ],
        [
          "option",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "value",
      "text": "0"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "dotglobal1",
  "message0": ".global %1",
  // "message0": ".global %1 %2",
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "extensions": ["dynamic_menu_extension"],

  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "global declaration",
  "helpUrl": ""
}

]);


// Blockly.Extensions.register('dynamic_menu_extension',
//   function(){
//     console.log("Testing json dd append");
//     this.getInput('NAME')
//     .appendField(new Blockly.FieldDropdown(
//       function() {
//         var options = [];
//         var now = Date.now();
//         for(var i = 0; i < 7; i++) {
//           var dateString = String(new Date(now)).substring(0, 3);
//           options.push([dateString, dateString.toUpperCase()]);
//           now += 24 * 60 * 60 * 1000;
//         }
//         return options;
//       }), 'DAY');
//   }
// );