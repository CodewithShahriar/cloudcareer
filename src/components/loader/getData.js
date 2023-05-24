export const companiesData = async () => {
  try {
    const companiesData = await fetch('/companies.json');
    const companyData = await companiesData.json();
    console.log(companiesData);
    return companyData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
