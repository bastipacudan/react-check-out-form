class App extends React.Component  {
    constructor(props){
       super(props);
       this.state = {
        cnt: 0,
        userData:[]
       }
       this.onSubmit = this.onSubmit.bind(this);
    }
  
    onSubmit(data = {}){
      
      this.handleData(data, this.state.cnt);
      if(this.state.cnt == 4){
        this.setState({cnt: 0})
        this.sendData(this.state.userData);
      }
       
      else 
        this.setState({cnt:this.state.cnt+1})
    }

    handleData(data,current){
        var arr = this.state.userData;
        arr.push(data)
        this.setState({userData: arr}, () =>console.log(this.state.userData))
    }
    sendData(data){
        var userData = {}

        this.state.userData.forEach(data => {
            userData = Object.assign(userData,data);
        })
        console.log('send this data:' ,userData)
        fetch('/send', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(userData), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
    }

    getData(){
        fetch('/get', {
            method: 'GET'
          })
         .then(res => res.json())
          .then(res => console.log(res));
    }


   render() {
    if(this.state.cnt === 0) {
        return(
         <div><Home onSubmit ={this.onSubmit}/></div>
        )
    } else if(this.state.cnt === 1) {
      return(
       <div><F1 onSubmit ={this.onSubmit}/></div>
      )
    } else if(this.state.cnt === 2) {
        return(
            <div><F2 onSubmit ={this.onSubmit}/></div>
           )
    } else if(this.state.cnt === 3) {
        return(
            <div><F3 onSubmit ={this.onSubmit}/></div>
           )
    } else {
        return(
            <div><Purchase props ={{onClick:this.onSubmit, data: this.state.userData}}/></div>
           )
    }
     
   }
}
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
  render() {
    return (
        <div>
          <h3> Home Page</h3>
          <button onClick = {() => {this.props.onSubmit(this.state)}}>Checkout</button>
       </div>)
  }
} 

class F1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password:''
        }
    }

  onSubmit(e){
      e.preventDefault();
      this.setState({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password:document.getElementById('password').value
      },() => {this.props.onSubmit(this.state)})
  }  
  render() {
    return (
        <div>
          <h3>Personal Info</h3>
          <form onSubmit ={(e) => this.onSubmit(e)}>
             <input type="text" name="name" placeholder="Name.." id = "name"/>
             <br/>
             <input type="text" name="email" placeholder="Email.." id = "email"/>
             <br/>
             <input type="text" name="password" placeholder="Password.." id = "password"/>
             <br/>
             <input type="submit" value="Submit"/>
          </form> 
       </div>)
  }
} 

class F2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            l1:'',
            l2:'',
            city: '',
            state: '',
            zip:''
        }
    }

  onSubmit(e){
      e.preventDefault();
      this.setState({
        l1: document.getElementById('l1').value,
        l2: document.getElementById('l2').value,
        city:document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value
      },() => {this.props.onSubmit(this.state)})
  } 

  render() {
    return (<div>
        <h3>Address Info</h3>
        <form onSubmit ={(e) => this.onSubmit(e)}>
           <input type="text" name="l1" placeholder="Line 1.." id ="l1"/>
           <br/>
           <input type="text" name="'l2" placeholder="Line 2.."id ="l2" />
           <br/>
           <input type="text" name="city" placeholder="City.." id ="city"/>
           <br/>
           <input type="text" name="state" placeholder="State.." id ="state"/>
           <br/>
           <input type="text" name="zip" placeholder="Zip Code.." id ="zip"/>
           <br/>
           <input type="submit" value="Submit"/>
        </form> 
     </div>)
  }
} 

class F3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            creditCard: '',
            exp: '',
            cvv: ''
        }
    }

  onSubmit(e){
      e.preventDefault();
      this.setState({
        creditCard: document.getElementById('creditCard').value,
        exp: document.getElementById('exp').value,
        cvv:document.getElementById('cvv').value,
      },() => {this.props.onSubmit(this.state)})
  } 

  render() {
    return (<div>
        <h3>Billing Info</h3>
        <form onSubmit ={(e) => this.onSubmit(e)}>
           <input type="text" name="cc" placeholder="Credit Card #.." id ="creditCard"/>
           <br/>
           <input type="text" name="exp" placeholder="Expiration Date.." id ="exp"/>
           <br/>
           <input type="text" name="cvv" placeholder="CVV.." id ="cvv"/>
           <br/>
        
           <input type="submit" value="Submit"/>
        </form> 
     </div>)
   }
 }
 class Purchase extends React.Component {
    constructor(props){
        super(props);
      
    }
  
  render() {
     var userData = {};
     this.props.props.data.forEach(data => {
         userData = Object.assign(userData, data);
     });
    console.log('this is the user',userData)
    return (
        <div>
          <h3> Confirmation Page</h3>
                <div>
                <h3>Personal Info</h3>
                    <input type="text" name="name" value={userData.name} id = "name"/>
                    <br/>
                    <input type="text" name="email" value={userData.email} id = "email"/>
                    <br/>
                    <input type="text" name="password"  value={userData.password} id = "password"/>
                    <br/>
            
            </div>

            <div>
                <h3>Address Info</h3>
                <input type="text" name="l1"  value={userData.l1} id ="l1"/>
                <br/>
                <input type="text" name="'l2"  value={userData.l2} id ="l2" />
                <br/>
                <input type="text" name="city"  value={userData.city} id ="city"/>
                <br/>
                <input type="text" name="state"  value={userData.state} id ="state"/>
                <br/>
                <input type="text" name="zip"  value={userData.zip} id ="zip"/>
                <br/>
            </div>

            <div>
                <h3>Billing Info</h3>
                <input type="text" name="cc"  value={userData.creditCard} id ="creditCard"/>
                <br/>
                <input type="text" name="exp"  value={userData.exp} id ="exp"/>
                <br/>
                <input type="text" name="cvv" value={userData.cvv} id ="cvv"/>
                <br/>
                
            </div>
            <br/>
          <button onClick = {() => {this.props.props.onClick()}}>Purchase</button>
       </div>)
  }
} 



ReactDOM.render(
    <App props ={{}}/>,
    document.getElementById('app')
  ); 