import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.stackby.com/mcp",
  description: "Organize data and automate workflows using spreadsheets and databases.",
  auth: connect("stackby/nexora-codepilot-stackby"),
});
