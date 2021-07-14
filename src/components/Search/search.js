export default class Search {
  _key = `https://front-test.beta.aviasales.ru/search`;

  _tickets = `https://front-test.beta.aviasales.ru/tickets?searchId=`;

  async getKey() {
    const res = await fetch(this._key);
    return res.json();
  }

  async getTickets(key) {
    const res = await fetch(`${this._tickets}${key}`);
    return res.json();
  }
}
