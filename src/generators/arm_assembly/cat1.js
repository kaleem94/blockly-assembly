import * as Blockly from 'blockly';


export const blocks1 = Blockly.common.createBlockDefinitionsFromJsonArray([
    {
        "type": "label",
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "field_input",
            "name": "gotoLabel",
            "text": "default"
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
      }
]);