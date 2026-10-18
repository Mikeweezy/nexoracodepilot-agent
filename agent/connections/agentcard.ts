import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.agentcard.sh/mcp",
  description: "Issue virtual cards for AI agents and place orders they pay for.",
  auth: connect("mcp.agentcard.sh/prj_6BX3AHRXhR6gaL6zKBPlMSgWA4Xe"),
});
