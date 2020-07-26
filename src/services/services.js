export const getEmployees = async () => {
  const urlEmpl = `https://reqres.in/api/users?per_page=12`;
  const responseEmpl = await fetch(urlEmpl);
  const data = await responseEmpl.json();
  return data;
}