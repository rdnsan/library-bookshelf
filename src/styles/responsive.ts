const responsive = `
  @media (max-width: 569px) {
    .alert {
      top: 10px;
      right: 0;
      margin: 0 10px;
    }

    header {
      height: 200px;
    }

    header h1 {
      font-size: 9vw;
    }

    .container {
      padding: 0 20px;
    }

    .input-book {
      padding: 25px;
    }

    .input-book .input-group input {
      height: 44px;
    }

    .search-book {
      padding: 10px;
    }

    .list-book {
      flex-direction: column;
      padding-bottom: 2.5rem;
    }

    .list-book #uncompleted {
      width: 100%;
      padding: 20px;
      margin-bottom: 2rem;
    }

    .list-book #uncompleted .card {
      flex-direction: column;
      align-items: flex-start;
    }

    .list-book #uncompleted .card:hover {
      transform: translateX(0);
    }

    .list-book #uncompleted .card .action-button {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }

    .list-book #completed {
      width: 100%;
      padding: 20px;
      margin-left: 0;
    }

    .list-book #completed .card {
      flex-direction: column;
      align-items: flex-start;
    }

    .list-book #completed .card:hover {
      transform: translateX(0);
    }

    .list-book #completed .card .action-button {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    header h1 {
      font-size: 7vw;
    }
    
    .input-book h2 {
      font-size: 1.7rem;
    }

    .input-book .input-group label {
      font-size: 15px;
    }

    .search-book label {
      font-size: 1.7rem;
    }

    .list-book {
      flex-direction: column;
      padding-bottom: 0;
    }

    .list-book #uncompleted {
      width: 95%;
      padding: 25px;
      margin-right: 0;
      margin-bottom: 4rem;
    }

    .list-book #completed {
      width: 95%;
      padding: 25px;
      margin-left: 0;
    }
  }

  @media (min-width: 902px) and (max-width: 1024px) {
    .list-book {
      align-items: inherit;
    }
  }
`;

export default responsive;
