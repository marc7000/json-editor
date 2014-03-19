/**
 * Turn an element into a schema editor
 * @param options Options (must contain at least a `schema` property)
 */
if(window.jQuery || window.Zepto) {
  (window.jQuery || window.Zepto).fn.jsoneditor = function(options) {
    var editor = this.data('jsoneditor');
    if(options === 'value') {
      if(!editor) throw "Must initialize jsoneditor before getting/setting the value";
      
      // Set value
      if(arguments.length > 1) {
        editor.setValue(arguments[1]);
      }
      // Get value
      else {
        return editor.getValue();
      }
    }
    else if(options === 'validate') {
      if(!editor) throw "Must initialize jsoneditor before validating";
      
      // Validate a specific value
      if(arguments.length > 1) {
        return editor.validate(arguments[1]);
      }
      // Validate current value
      else {
        return editor.validate();
      }
    }
    else if(options === 'destroy') {
      if(editor) {
        editor.destroy();
        this.data('jsoneditor',null);
      }
    }
    else {
      // Destroy first
      if(editor) {
        editor.destroy();
      }
      
      this.data('jsoneditor',new JSONEditor(this.get(0),options));
    }
    
    return this;
  };
}
