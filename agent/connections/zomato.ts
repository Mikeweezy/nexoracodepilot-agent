import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp-server.zomato.com/mcp",
  description: "Explore restaurants and food delivery options.",
  auth: connect("mcp-server.zomato.com/prj_6BX3AHRXhR6gaL6zKBPlMSgWA4Xe"),
});
