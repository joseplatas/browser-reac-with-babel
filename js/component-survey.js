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
    <div id="q1" class="question_wrapper">
      <div class="question required">
        <span class="number">1</span>  Based on your recent repair, how would you rate your overall experience?
      </div>
      <select class="not-custom">
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
//survey form builder
class SurveyForm extends React.Component{

  build_quiestions(){
    console.log(this.props);
    return (
      <SelectQuestion />
    );
  }

  render(){
    return(
      <form id="customer_survey_form" action="#" method="post">
        {this.build_quiestions()}
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
  questions: [{},{}]
}
//Render the Dom
ReactDOM.render(
	<Survey data={survey_data}/>,
	document.getElementById("main")
);
