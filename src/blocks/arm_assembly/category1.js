import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
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
// {
//     'type': 'label',
//     'message0': '%1 %2 %3',
//     'args0': [
//       {
//         'type': 'field_input',
//         'name': 'gotoLabel',
//         'text': 'default'
//       },
//       {
//         'type': 'input_dummy'
//       },
//       {
//         'type': 'input_statement',
//         'name': 'NAME'
//       }
//     ],
//     'previousStatement': null,
//     'nextStatement': null,
//     'colour': 90,
//     'tooltip': 'Label',
//     'helpUrl': ''
//   },
  {
    'type': 'dotglobal',
    'message0': '.global %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'NAME'
      }
    ],
    'previousStatement': null,
    'nextStatement': null,
    'colour': 230,
    'tooltip': 'global declaration',
    'helpUrl': ''
  }
]);
