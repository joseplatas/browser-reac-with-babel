//functional component
function InformationSurvey(props) {
  return(
    <div>
      <h1 className="page_title">{props.title}</h1>
      <p className="instructions">{props.description}</p>
    </div>
  );
}

function SelectQuestion(props){
  let options = [];
  for (var i = 0; i < props.data.options.length; i++) {
    options.push(<option value="{props.data.options[i]}">{props.data.options[i]}</option>)
  }
  var requiredClass = (props.data.isRequired)?"required":"";

  return(
    <div className="question_wrapper">
      <div className={"question " + requiredClass }>
        <span className="number">{props.id}</span> {props.data.question_text}
      </div>
      <select name={"answer_"+props.id}>
        <option value="" disabled selected>Please choose the best answer</option>
        {options}
      </select>
    </div>
  );
}

function InputQuestion(props){
  var requiredClass = (props.data.isRequired)?"required":"";
  return(
    <div className="question_wrapper">
      <div className={"question " + requiredClass }>
        <span className="number">{props.id}</span> {props.data.question_text}
      </div>
      <input type="text" name={"answer_"+props.id}/>
    </div>
  );
}

function TextareaQuestion(props){
  var requiredClass = (props.data.isRequired)?"required":"";
  return(
    <div className="question_wrapper">
      <div className={"question " + requiredClass }>
        <span className="number">{props.id}</span> {props.data.question_text}
      </div>
      <textarea name={"answer_"+props.id}></textarea>
    </div>
  );
}

//survey form builder
class SurveyForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      answers: []
    }
    //handle the change of data
    this.get_answers = this.get_answers.bind(this);
  }

  build_questions(){
    let qComponents = [];
    //traverse questions
    for (var i = 0; i < this.props.questions.length; i++) {
      let q = this.props.questions[i];
      let id = i + 1;
      switch (q.type) {
        case 'select':
            qComponents.push(<SelectQuestion id={id} data={q}/>);
          break;
        case 'text':
          qComponents.push(<InputQuestion id={id} data={q}/>);
          break;
        case 'textarea':
          qComponents.push(<TextareaQuestion id={id} data={q}/>);
          break;
        default:
          //nothing
      }

    }

    return qComponents;
  }


  get_answers(event){
    event.preventDefault();
    console.log("Checking answers");

  }

  render(){
    return(
      <form id="customer_survey_form" action="#" method="post">
        {this.build_questions()}
        <center>
          <button onClick={this.get_answers}>SUBMIT</button>
        </center>
      </form>
    )
  }
}


//class component
class Survey extends React.Component{
  render(){
    return(
      <div id="survey_form">
        <InformationSurvey title={this.props.data.title} description={this.props.data.description} />
        <SurveyForm questions={this.props.data.questions} />
      </div>
    )
  }
}

const survey_data = {
  title: "Survey",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit ex at odio convallis, et feugiat est feugiat. Etiam lobortis dui vehicula sollicitudin volutpat. Mauris hendrerit finibus purus eget vehicula",
  questions: [{
    question_text: "Question for the select",
    type: "select",
    options: [1,2,3,4,5,6,7,8,9,10],
    isRequired: true
  },
  {
    question_text: "Question for text input",
    type: "text",
    options: [],
    isRequired: false
  },
  {
    question_text: "Question for the textarea",
    type: "textarea",
    options: [],
    isRequired: true
  }
  ]
}
//Render the Dom
ReactDOM.render(
	<Survey data={survey_data}/>,
	document.getElementById("main")
);
