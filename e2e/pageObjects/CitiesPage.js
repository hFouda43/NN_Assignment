import expect from "expect";

class CitiesPage{
get citiesHeader(){
    return element(by.id('citiesHeader'));
    }

    async verifyCitiesPage(){
    await expect(this.citiesHeader).toEqual('Cities');
    }
}
export default new CitiesPage();