import { Component } from "react";
import TableItem from "./TableItem";


class PhanTrang extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newsList: [
          {
            id: "1",
            title: "The Highs and Lows of Life as a Black Editor in Chief",
            content: "ct1"
          },
          {
            id: "2",
            title: "The Real Reason Apple Wants You to Use Its Sign-in Service",
            content: "ct2"
          },
          {
            id: "3",
            title: "Men Need To Think More About Fertility",
            content: "ct3"
          },
          {
            id: "4",
            title: "Reactive Streams and Kotlin Flows",
            content: "ct4"
          },
          {
            id: "5",
            title: "The Incredible Creative Power of the Index Card",
            content: "ct5"
          },
          {
            id: "6",
            title: "The Man Who Helped the Beatles Admit It’s Getting Better",
            content: "ct6"
          },
          {
            id: "7",
            title: "Facebook Can Resolve Its Issues — How Will We Resolve Ours?",
            content: "ct7"
          },
          {
            id: "8",
            title: "The Personal Newsletter Fad Needs to End",
            content: "ct8"
          },
          {
            id: "9",
            title: "How Do You Know You Have a Good Idea?",
            content: "ct9"
          },
          {
            id: "10",
            title: "Ronaldo & Messi",
            content: "ct10"
          }
        ],
        currentPage: 1,
        newsPerPage: 2 // số item hiện mỗi trang
        
      };
    }
  
    chosePage = (event) => {
      this.setState({
        currentPage: Number(event.target.id)
      });
    };
  
    render() {
      const { newsList, currentPage, newsPerPage } = this.state;
      const indexOfLastNews = currentPage * newsPerPage;
      const indexOfFirstNews = indexOfLastNews - newsPerPage;
      const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews);
      const renderTodos = currentTodos.map((todo, index) => {
        return (
          
          <TableItem
            stt={index + 1 + (currentPage - 1) * newsPerPage}
            key={index}
            data={todo}
          />
        );
      });
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
        pageNumbers.push(i);
      }
      return (
        <div className="App">
          <table className="table">
            <tbody>{renderTodos}</tbody>
          </table>
          <div className="pagination-custom">
            <ul id="page-numbers">
              {pageNumbers.map((number) => {
                if (this.state.currentPage == number) {
                  return (
                    <li key={number} id={number} className="active">
                      {number}
                    </li>
                  );
                } else {
                  return (
                    <li key={number} id={number} onClick={this.chosePage}>
                      {number}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      );
    }
  }
  export default PhanTrang;
  