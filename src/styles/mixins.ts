const mixins = {
  CardContainer(background: string, shadow: string): string {
    return `
      width: 49%;
      background: ${background};
      padding: 30px;
      border-radius: 8px;
      box-shadow: 10px 10px 0 0 ${shadow};
    `;
  },
  Card(color: string): string {
    return `
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      margin-bottom: 1.5rem;
      background: #fff;
      border-radius: 8px;
      border: 1px solid transparent;
      border-left-width: 4px;
      border-left-color: ${color};
      transition: all 0.3s ease-in-out;
    `;
  },
  ActionButton: `
    width: 40px;
    height: 40px;
    border: none;
    margin-right: 10px;
    background-size: contain;
    cursor: pointer;
    transition: all 0.3s;
  `,
  ActionButtonIcon(icon: string) {
    return `background: url(${icon});`;
  },
};

export default mixins;
