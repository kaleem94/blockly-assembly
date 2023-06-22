import * as Blockly from 'blockly';

export const programLabels = [];
export const programData = [];

// jsonGenerator.programLabels = [];

export const jsonGenerator = new Blockly.Generator('assembly_arm');

jsonGenerator.PRECEDENCE = 0;
jsonGenerator.INDENT= "    ";

Blockly.Extensions.register('dynamic_menu_extension',
  function(){
    console.log("Testing json dd append");
    this.getInput('NAME')
    .appendField(new Blockly.FieldDropdown(
      function() {
        var options = [];
        options.push(["_start", "_start"]);
        if (programLabels)
        {
          for(var i = 0; i < programLabels.length; i++) {
            if (programLabels[i] != "_start"){
              options.push([programLabels[i], programLabels[i]]);
            }
          }
        }
        
        // for(var i = 0; i < 3; i++) {
        //   var dateString = String(new Date(now)).substring(0, 3);
        //   options.push([dateString, dateString.toUpperCase()]);
        //   now += 24 * 60 * 60 * 1000;
        // }
        return options;
      }), 'gotoLabel');
      // }), 'DAY');
  }
);

// Blockly.Blocks['dynamic_menu_extension'] = {
//   init: function() {
//     console.log("Testing js dd append");
//     var input = this.appendDummyInput()
//       .appendField('day')
//       .appendField(new Blockly.FieldDropdown(
//         this.generateOptions), 'DAY');
//   },

//   generateOptions: function() {
//     var options = [];
//     var now = Date.now();
//     for(var i = 0; i < 7; i++) {
//       var dateString = String(new Date(now)).substring(0, 3);
//       options.push([dateString, dateString.toUpperCase()]);
//       now += 24 * 60 * 60 * 1000;
//     }
//     return options;
//   }
// };

jsonGenerator.clearBeforeConversion = function(){
  programLabels.splice(0, programLabels.length);
  programData.splice(0, programData.length);
}

jsonGenerator.scrub_ = function(block, code, thisOnly) {
  // programLabels.splice(0, programLabels.length);
  // programData.splice(0, programData.length);
  const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    // return code + ',\n' + jsonGenerator.blockToCode(nextBlock);
    return code + jsonGenerator.blockToCode(nextBlock);
  }
  return code;
};

jsonGenerator['dd'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `"${text_name}": ${text_name}`;
  return code;
};

jsonGenerator['customizable_block'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var text_data = block.getFieldValue('data');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (dropdown_name == "comment"){
    code += "; " + text_data;
  }
  else if (dropdown_name == "code"){
    code += text_data;
  }
  code += "\n";
  return code;
};

// jsonGenerator['label'] = function(block) {
//   var text_gotolabel = block.getFieldValue('gotoLabel');
//   var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };

jsonGenerator['dotglobal'] = function(block) {
  // var value_name = block.getFieldValue('NAME');
  var value_name = jsonGenerator.valueToCode(
    block, 'NAME', jsonGenerator.PRECEDENCE);
  value_name = value_name.replace(/"/g, '');
  var code = ".global " + value_name + "\n";
  return code;
};

jsonGenerator['label'] = function(block) {
  var value_name = block.getFieldValue('gotoLabel');
  const statementMembers =
      jsonGenerator.statementToCode(block, 'MEMBERS');
  // console.log(statementMembers);
  const code = value_name + ':\n' + statementMembers + '\n';
  // return [code, jsonGenerator.PRECEDENCE];
  programLabels.push(value_name);
  // jsonGenerator.programLabels.push(value_name);
  // console.log(Blockly.Blocks["list_new"].inputList[0].fieldRow[1].options_);
  // console.log(jsonGenerator.programLabels);
  // console.log(Blockly.serialization.blocks.save);

  // Blockly.Blocks["list_new"].appendField(new Blockly.FieldDropdown(), 'length_type');
  // Blockly.Blocks["list_new"].appendField(new Blockly.FieldDropdown(
  //   function () {
  //     let options = []
  //     // let table = JSON.parse(localStorage.getItem('applab_myTables')).find(table => table.id === event.newValue)
  //     // Object.keys(table['columnData']).filter(cId => table['columnOrder'].includes(cId)).map(cId => options.push([table['columnData'][cId]['name'], cId]))
  //     for (let i=0;i<programLabels.length;i++) {
  //       options.push([programLabels[i], programLabels[i]]);
  //     }
  //     return options
  // }
  // ), 'length_type')
  return code;
};

// jsonGenerator['dotdata'] = function(block) {
//   const statementMembers =
//       jsonGenerator.statementToCode(block, 'MEMBERS');
//   // var dsd = jsonGenerator.
//   // console.log(dsd);
//   const code = '.data\n' + statementMembers + '\n';
//   return code;
// };



jsonGenerator['dotglobal1'] = function(block) {
  // var dropdown_ddl = block.getFieldValue('ddl');
  var value_name = block.getFieldValue('gotoLabel');
  // TODO: Assemble JavaScript into code variable.
  var code = '.global '+ value_name + '\n';
  return code;
};

jsonGenerator['list_new'] = function(block) {
  var dropdown_data_name = block.getFieldValue('NAME');
  var dropdown_length_type = block.getFieldValue('length_type');
  var text_value = block.getFieldValue('value');
  var code = dropdown_data_name + ":\n" + "  " + dropdown_length_type + " " + text_value + "\n";
  programData.push(dropdown_data_name);
  return code;
};

jsonGenerator['dot_word'] = function(block) {
  var text_array = block.getFieldValue('array');
  var code = '.word: ' + text_array + "\n";
  return code;
};

jsonGenerator['move_register'] = function(block) {
  var number_register = block.getFieldValue('Register');
  var number_value = block.getFieldValue('value');
  var code = 'MOV R' + number_register + ',#' + String(number_value) + '\n';
  return code;
};

jsonGenerator['swi_interrupt'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var code = 'SWI ' + text_name + '\n';
  return code;
};


jsonGenerator['new_block_1'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

jsonGenerator['logic_null'] = function(block) {
  return ['null', jsonGenerator.PRECEDENCE];
};

jsonGenerator['text'] = function(block) {
  const textValue = block.getFieldValue('TEXT');
  const code = `"${textValue}"`;
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator['math_number'] = function(block) {
  const code = String(block.getFieldValue('NUM'));
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator['logic_boolean'] = function(block) {
  const code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, jsonGenerator.PRECEDENCE];
};

jsonGenerator['member'] = function(block) {
  const name = block.getFieldValue('MEMBER_NAME');
  const value = jsonGenerator.valueToCode(
      block, 'MEMBER_VALUE', jsonGenerator.PRECEDENCE);
  const code = `"${name}": ${value}`;
  return code;
};

jsonGenerator['lists_create_with'] = function(block) {
  const values = [];
  for (let i = 0; i < block.itemCount_; i++) {
    const valueCode = jsonGenerator.valueToCode(block, 'ADD' + i,
        jsonGenerator.PRECEDENCE);
    if (valueCode) {
      values.push(valueCode);
    }
  }
  const valueString = values.join(',\n');
  const indentedValueString =
      jsonGenerator.prefixLines(valueString, jsonGenerator.INDENT);
  const codeString = '[\n' + indentedValueString + '\n]';
  return [codeString, jsonGenerator.PRECEDENCE];
};

jsonGenerator['object'] = function(block) {
  const statementMembers =
      jsonGenerator.statementToCode(block, 'MEMBERS');
  const code = '{\n' + statementMembers + '\n}';
  return [code, jsonGenerator.PRECEDENCE];
};
