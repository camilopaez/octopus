import React,{ Component } from 'react';
import {render} from 'react-dom';


class App extends Component{
    
    constructor(){
        super();
        this.state = {
            title:'',
            description:'',
            topics:[]
        };
        this.addTopic = this.addTopic.bind(this);
        this.handleCHange = this.handleCHange.bind(this);

    }
    componentDidMount(){
        this.fecthTopics();
    }
    fecthTopics(){
        fetch('/api/topics')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({topics: data.reverse()});
            })
    }

    addTopic(e){
        fetch('/api/topics',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        .then(res  => res.json())
        .then(data => {
            console.log(data)
            M.toast({html:'Topic saved'})
            this.setState({title:'',description:''});
            this.fecthTopics();
        })
        .catch(err => console.error(err));

        e.preventDefault();

    }
    handleCHange(e){
        const {name,value}= e.target;
        this.setState({
            [name]:value
        });

    }
    
    render(){
        return (
            <div>
                {/*Navigation*/}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Octopus</a>
                    </div>
                </nav>
                

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTopic}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input value={this.state.title} name="title" onChange={this.handleCHange} type="text" placeholder="Title"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea value={this.state.description} name="description" onChange={this.handleCHange} placeholder="Description" className="materialize-textarea"></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className=" col s12">
                                                <button type="submit" className="btn light-blue darken-4">Add</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.topics.map(topic=>{
                                            return (
                                                <tr key={topic._id}>
                                                    <td>{topic.title}</td>
                                                    <td>{topic.description}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;