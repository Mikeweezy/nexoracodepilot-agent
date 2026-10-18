import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.stacktr.ee",
  description: "Publish agent-made HTML pages to private, shareable links.",
  auth: connect("api.stacktr.ee/prj_6BX3AHRXhR6gaL6zKBPlMSgWA4Xe"),
});
