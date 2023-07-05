import assert from 'chai';
class HomePage {

    //Defining Home Page Elements
    get countersSection(){
        return element(by.id('homeSectionText-counters'));
    }
    get membersSection(){
        return element(by.id('homeSectionText-members'));
    }

    get citiesSection(){
        return element(by.id('homeSectionText-cities'));
    }
    get animationSection(){
        return element(by.id('homeSectionText-animation'));
    }

    get extrasSection(){
        return element(by.id('homeSectionText-extras'));
    }

      tapHomeSection(section) {
         switch (section) {
             case 'counters':
                 this.countersSection.tap();
                 break;
             case 'members':
                 this.membersSection.tap();
                 break;
             case 'cities':
                 this.citiesSection.tap();
                 break;
             case 'animation':
                 this.animationSection.tap();
                 break;
             default:
                assert.fail(`The entered Section ${section} is an invalid Home Section`);
            
        }
    }
}

export default new HomePage();