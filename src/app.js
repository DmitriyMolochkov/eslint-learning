const { connect } = require('./trading-view');
const { start: startProxyServer } = require('./proxy-ws-server');

console.log();

module.exports = async () => {
  let connection;
  let qwe;
  let wss;
  try {
    qwe = 1;
    connection = await connect(qwe);
    wss = await startProxyServer(connection);
  } catch (e) {
    // console.error(e.toString());
    if (connection) connection.close();
    if (wss) wss.close();
  }
};
