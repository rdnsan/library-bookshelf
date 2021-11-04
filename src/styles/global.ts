import variables from './variables';
import mixins from './mixins';
import responsive from './responsive';

const GlobalStyle = `
  ${variables}

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--light);
    font-family: var(--font-primary);
  }

  .alert {
    position: absolute;
    top: 20px;
    right: 20px;
    width: fit-content;
    padding: 20px;
    background-color: #f44336;
    color: white;
    opacity: 0.8;
    transition: opacity 0.6s;
  }

  .alert .closebtn {
    margin-left: 15px;
    color: white;
    font-size: 28px;
    float: right;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .alert .closebtn:hover {
    color: #000;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: var(--green);
  }

  header h1 {
    font-size: 4vw;
    font-weight: 900;
    text-align: center;
    color: var(--dark);
    padding: 10px 20px;
    margin-bottom: 4rem;
  }
  
  #content {
    max-width: 1400px;
    width: 100%;
    margin: auto;
    margin-top: -70px;
  }

  .container {
    padding: 0 35px;
    padding-bottom: 70px;
  }

  .is-check {
    color: #198754 !important;
  }

  .input-book {
    max-width: 570px;
    background: #fff;
    padding: 35px;
    margin: auto;
    margin-bottom: 4rem;
    border-radius: 10px;
    box-shadow: 0 30px 60px 0 rgba(#c1c1c1, 0.4);
  }

  .input-book h2 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--dark);
    text-align: center;
    padding: 0 20px 20px 20px;
  }

  .input-book .input-group {
    margin-bottom: 20px;
  }

  .input-book .input-group label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: var(--dark);
    margin-bottom: 5px;
    user-select: none;
  }

  .input-book .input-group input {
    width: 100%;
    height: 50px;
    padding: 5px 15px;
    font-size: 18px;
    background: none;
    color: var(--dark);
    border: 1px solid var(--grey);
    border-radius: 5px;
    box-shadow: none;
    transition: all 0.3s ease-in-out;
  }

  .input-book .input-group input:hover {
    border-color: var(--green);
  }

  .input-book .input-group input:focus {
    outline: none;
    border-color: var(--green);
    box-shadow: 0 10px 20px -13px rgba(#207565, 0.35);
  }

  .input-book .input-check {
  }

  .input-book .input-check input {
    width: 20px;
    height: 20px;
  }

  .input-book .input-check label {
    position: relative;
    top: -4px;
    padding-left: 10px;
    color: #dc3545;
  }

  .input-book button {
    width: 100%;
    height: 55px;
    background: var(--green);
    color: var(--dark);
    font-size: 22px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 3px 10px 20px 0 rgba(var(--green), 0.3);
    transition: all 0.3s ease;
  }
  
  .input-book button:hover {
    background: var(--green-darken-10);
  }

  .search-book {
    max-width: 570px;
    padding: 35px;
    margin: auto;
    margin-bottom: 4rem;
    border-radius: 5px;

  }

  .search-book label {
    display: block;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    color: var(--dark);
    margin-bottom: 1rem;
  }

  .search-book input {
    width: 100%;
    height: 45px;
    padding: 5px 20px;
    font-size: 1rem;
    font-weight: 400;
    color: var(--dark);
    border: none;
    border-radius: 30px;
    outline: none;
    box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.1);
  }
  
  .search-book input::placeholder {
    font-size: 1.3rem;
    transform: scaleX(-1);
  }

  .list-book {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    border-radius: 8px;

  }

  .list-book #uncompleted {
    ${mixins.CardContainer('var(--coffee-lighten-50)', 'var(--coffee)')}
    margin-right: 10px;
  }

  .list-book #uncompleted h2 {
    color: var(--coffee);
    padding: 0 0 1.5rem 0;
  }

  .list-book #uncompleted .card {
    ${mixins.Card('var(--coffee)')}
  }

  .list-book #uncompleted .card:hover {
    transform: translateX(6px);
  }

  .list-book #uncompleted .card .book-info h3 {
    color: var(--coffee);
    margin-bottom: 10px;
  }

  .list-book #uncompleted .card .book-info p {
    margin-bottom: 10px;
  }

  .list-book #uncompleted .card .action-button {
    padding: 5px 0;
  }

  .list-book #uncompleted .card .action-button .check-btn {
    ${mixins.ActionButtonIcon('https://cloud.digitboxtech.com/static/check.svg')}
    ${mixins.ActionButton}
  }
  
  .list-book #uncompleted .card .action-button .trash-btn {
    ${mixins.ActionButtonIcon('https://cloud.digitboxtech.com/static/trash.svg')}
    ${mixins.ActionButton}
  }

  .list-book #uncompleted .card .action-button .check-btn:hover,
  .list-book #uncompleted .card .action-button .trash-btn:hover {
    transform: scale(1.1);
  }

  .list-book #completed {
    ${mixins.CardContainer('var(--green-lighten-20)', 'var(--dark-green)')}
    margin-left: 10px;
  }

  .list-book #completed h2 {
    color: var(--dark-green);
    padding: 0 0 1.5rem 0;
  }

  .list-book #completed .card {
    ${mixins.Card('var(--dark-green)')}
  }

  .list-book #completed .card:hover {
    transform: translateX(6px);
  }

  .list-book #completed .card .book-info h3 {
    color: var(--dark-green);
    margin-bottom: 10px;
  }
  
  .list-book #completed .card .book-info p {
    margin-bottom: 10px;
  }

  .list-book #completed .card .action-button {
    padding: 5px 0;
  }
  .list-book #completed .card .action-button .undo-btn {
    ${mixins.ActionButtonIcon('https://cloud.digitboxtech.com/static/undo.svg')}
    ${mixins.ActionButton}
  }

  .list-book #completed .card .action-button .trash-btn {
    ${mixins.ActionButtonIcon('https://cloud.digitboxtech.com/static/trash.svg')}
    ${mixins.ActionButton}
  }

  .list-book #completed .card .action-button .undo-btn:hover,
  .list-book #completed .card .action-button .trash-btn:hover {
    transform: scale(1.1);
  }

  ${responsive}
`;

export default GlobalStyle;
