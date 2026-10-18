import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.llmpulse.ai/api/v1/mcp",
  description: "Track how brands appear in AI answers: mentions, citations, and sentiment.",
  auth: connect("api.llmpulse.ai/prj_6BX3AHRXhR6gaL6zKBPlMSgWA4Xe"),
});
