import { Editor } from "@tinymce/tinymce-react";

import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: "<p>a b&nbsp;<em>ef</em></p> ", base: "" };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(content, editor) {
    console.log(content);
    let matcher = content.match(/^(.*?)(<em>?)(.*)$/ms);
    console.log(matcher);
    this.setState({ content: content });
  }

  render() {
    return (
      <Editor
        value={this.state.content}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default MyComponent;
