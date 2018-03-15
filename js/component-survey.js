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
  return(
    <div className="question_wrapper">
      <div className="question required">
        <span className="number">{props.id}</span> {props.data.question_text}
      </div>
      <select>
        <option value="" disabled selected>Rate from 1 to 10</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}

function InputQuestion(props){
  return(
    <div className="question_wrapper">
      <div className="question required">
        <span className="number">{props.id}</span> {props.data.question_text}
      </div>
      <input type="text" />
    </div>
  );
}
//survey form builder
class SurveyForm extends React.Component{

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
        default:
          //nothing
      }

    }

    return qComponents;
  }

  render(){
    return(
      <form id="customer_survey_form" action="#" method="post">
        {this.build_questions()}
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
  }
  ]
}
//Render the Dom
ReactDOM.render(
	<Survey data={survey_data}/>,
	document.getElementById("main")
);
