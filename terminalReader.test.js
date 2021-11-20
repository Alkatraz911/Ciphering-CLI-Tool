import { spawn } from "child_process";

test("test of TherminalReader",  async () => {
  const config = "C1-R0-A";
  const cp =  await spawn("node", ["./testcp.test.js", "-c", config]);
  let res;

  cp.stdout.on("data", (chunk) => {
    res = chunk.toString().replace('\n','');
  });

  cp.stdout.on("end", () => {
     expect(res).toEqual('-c,C1-R0-A'); 
  });

});
