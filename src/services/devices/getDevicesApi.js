const BASIC_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";

export async function getDevicesApi() {
  try {
    return await fetch(BASIC_API).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
