function SelectSVG(classSelector, resultSelector) {
    const one2 = document.querySelector(`${classSelector[0]} svg path[d='M466.21 146.577H622.206V137.295H748.568L737.862 264.195H727.512V276.688V297.395V422.33H483.703V351.599H466.21V301.544V297.395V146.577Z']`)
      const one3 = document.querySelectorAll(`${classSelector[0]} svg path[d='M640.398 680.544H462.105V534.185H172.123H164.99H120.065L107.82 679.83H164.99V704.814H203.486V828.328H640.398V680.544Z']`)[1]
      const one4 = document.querySelectorAll(`${classSelector[0]} svg path[d='M164.935 7.66455H640.398V155.808H475.138V287.882H131.022V137.6H164.935V7.66455Z']`)[1]
      const one5 = document.querySelector(`${classSelector[0]} svg path[d='M453.183 689.466H622.205V698.748H748.568L737.862 571.848H727.511V559.354V538.648V413.713H483.703V484.748H466.21V538.648H453.183V689.466Z']`)

      const two2 = document.querySelectorAll(`${classSelector[1]} svg path[d='M119.706 385.91H344.291V336.179H462.445V40.3218H221.073V49.8288L190.97 49.8337L129.21 111.593V141.686H119.706V385.91Z']`)[1]
      const two3 = document.querySelectorAll(`${classSelector[1]} svg path[d='M454.522 270.292H520.253V298.801H665.17V270.292V216.728V59.3274H573.088L572.992 11.8135L466.878 18.1485V59.3274H454.522V270.292Z']`)[1]
      const two4 = document.querySelectorAll(`${classSelector[1]} svg path[d='M787.441 94.0683L887.22 103.323V566.78H657.254V115.965V103.323V59.3274H787.441V94.0683Z']`)[1]
      const two5 = document.querySelectorAll(`${classSelector[1]} svg path[d='M534.35 346.314H665.17V566.781H613.551V617.145H556.853V612.395H417.145V385.911H534.35V346.314Z']`)[1]
      const two6 = document.querySelectorAll(`${classSelector[1]} svg path[d='M149.797 835.712H571.723V604.478H169.65H149.797H119.704V736.882H149.797V835.712Z']`)[1]

      const three2 = document.querySelectorAll(`${classSelector[2]} svg path[d='M200.041 169.557H123.946V85.2656H107.846L8.21191 93.7194V169.557V176.791V517.05H156.84H200.041H216.533V315.672H200.041V169.557Z']`)[1]
      const three3 = document.querySelectorAll(`${classSelector[2]} svg path[d='M116.713 53.5334H220.586V21.7068L313.466 15.9111H315.209L315.203 53.5334H319.249V169.557V176.79V237.552H259.355V272.273H192.808V237.552V192.766V176.79H116.713V53.5334Z']`)[1]
      const three4 = document.querySelectorAll(`${classSelector[2]} svg path[d='M406.047 53.5328H514.491V272.273H312.014V55.4145V16.0019L406.047 10.1335V53.5328Z']`)[1]
      const three5 = document.querySelectorAll(`${classSelector[2]} svg path[d='M507.255 53.5333H625.119V21.7066L716.08 16.0159H719.732V53.5333H721.463V207.73V255.201V272.273H594.983V255.201H507.255V53.5333Z']`)[1]
      const three6 = document.querySelectorAll(`${classSelector[2]} svg path[d='M209.3 315.671H514.491V517.049H213.063V478.856H209.3V315.671Z']`)[1]
      const three7 = document.querySelectorAll(`${classSelector[2]} svg path[d='M886.349 272.273H1006.42V297.59H1224V105.613H1222.56V70.1575L1115.5 59.225V53.5334H886.349V272.273Z']`)[1]
      const three8 = document.querySelectorAll(`${classSelector[2]} svg path[d='M886.351 315.672H1006.42V290.355H1224.01V482.332H1222.56V517.787L1115.51 528.72V534.413H886.351V315.672Z']`)[1]
      const three9 = document.querySelectorAll(`${classSelector[2]} svg path[d='M714.227 315.672H893.577V534.4H823.559V580.703L714.227 570.702V534.4V315.672Z']`)[1]
      const three10 = document.querySelectorAll(`${classSelector[2]} svg path[d='M714.19 272.273H893.579V53.5448L810.582 53.5333V10.1333L716.316 16.0159L716.261 53.5333L714.19 53.5448V272.273Z']`)[0]

      one2.classList.add(resultSelector[0])
      one3.classList.add(resultSelector[0])
      one4.classList.add(resultSelector[0])
      one5.classList.add(resultSelector[0])

      two2.classList.add(resultSelector[1])
      two3.classList.add(resultSelector[1])
      two4.classList.add(resultSelector[1])
      two5.classList.add(resultSelector[1])
      two6.classList.add(resultSelector[1])

      three2.classList.add(resultSelector[2])
      three3.classList.add(resultSelector[2])
      three4.classList.add(resultSelector[2])
      three5.classList.add(resultSelector[2])
      three6.classList.add(resultSelector[2])
      three7.classList.add(resultSelector[2])
      three8.classList.add(resultSelector[2])
      three9.classList.add(resultSelector[2])
      three10.classList.add(resultSelector[2])
}

function findFlat(sectionNumber, find, result){
  if(sectionNumber === 1){
    
    const one2 = document.querySelector(`.${find} svg path[d="M466.21 146.577H622.206V137.295H748.568L737.862 264.195H727.512V276.688V297.395V422.33H483.703V351.599H466.21V301.544V297.395V146.577Z"]`)
    const one3 = document.querySelectorAll(`.${find} svg path[d="M640.398 680.544H462.105V534.185H172.123H164.99H120.065L107.82 679.83H164.99V704.814H203.486V828.328H640.398V680.544Z"]`)
    const one4 = document.querySelectorAll(`.${find} svg path[d="M164.935 7.66455H640.398V155.808H475.138V287.882H131.022V137.6H164.935V7.66455Z"]`)
    const one5 = document.querySelector(`.${find} svg path[d="M453.183 689.466H622.205V698.748H748.568L737.862 571.848H727.511V559.354V538.648V413.713H483.703V484.748H466.21V538.648H453.183V689.466Z"]`)

    one2.classList.add(result)
    one3[1].classList.add(result)
    one4[1].classList.add(result)
    one5.classList.add(result)
  }
  else if(sectionNumber === 2){
    
    const two2 = document.querySelectorAll(`.${find} svg path[d="M119.706 385.91H344.291V336.179H462.445V40.3218H221.073V49.8288L190.97 49.8337L129.21 111.593V141.686H119.706V385.91Z"]`)[1]
    const two3 = document.querySelectorAll(`.${find} svg path[d="M454.522 270.292H520.253V298.801H665.17V270.292V216.728V59.3274H573.088L572.992 11.8135L466.878 18.1485V59.3274H454.522V270.292Z"]`)[1]
    const two4 = document.querySelectorAll(`.${find} svg path[d="M787.441 94.0683L887.22 103.323V566.78H657.254V115.965V103.323V59.3274H787.441V94.0683Z"]`)[1]
    const two5 = document.querySelectorAll(`.${find} svg path[d="M534.35 346.314H665.17V566.781H613.551V617.145H556.853V612.395H417.145V385.911H534.35V346.314Z"]`)[1]
    const two6 = document.querySelectorAll(`.${find} svg path[d="M149.797 835.712H571.723V604.478H169.65H149.797H119.704V736.882H149.797V835.712Z"]`)[1]

    two2.classList.add(result)
    two3.classList.add(result)
    two4.classList.add(result)
    two5.classList.add(result)
    two6.classList.add(result)
  }
  else if(sectionNumber === 3){
    
    const three2 = document.querySelectorAll(`.${find} svg path[d="M200.041 169.557H123.946V85.2656H107.846L8.21191 93.7194V169.557V176.791V517.05H156.84H200.041H216.533V315.672H200.041V169.557Z"]`)[1]
    const three3 = document.querySelectorAll(`.${find} svg path[d="M116.713 53.5334H220.586V21.7068L313.466 15.9111H315.209L315.203 53.5334H319.249V169.557V176.79V237.552H259.355V272.273H192.808V237.552V192.766V176.79H116.713V53.5334Z"]`)[1]
    const three4 = document.querySelectorAll(`.${find} svg path[d="M406.047 53.5328H514.491V272.273H312.014V55.4145V16.0019L406.047 10.1335V53.5328Z"]`)[1]
    const three5 = document.querySelectorAll(`.${find} svg path[d="M507.255 53.5333H625.119V21.7066L716.08 16.0159H719.732V53.5333H721.463V207.73V255.201V272.273H594.983V255.201H507.255V53.5333Z"]`)[1]
    const three6 = document.querySelectorAll(`.${find} svg path[d="M209.3 315.671H514.491V517.049H213.063V478.856H209.3V315.671Z"]`)[1]
    const three7 = document.querySelectorAll(`.${find} svg path[d="M886.349 272.273H1006.42V297.59H1224V105.613H1222.56V70.1575L1115.5 59.225V53.5334H886.349V272.273Z"]`)[1]
    const three8 = document.querySelectorAll(`.${find} svg path[d="M886.351 315.672H1006.42V290.355H1224.01V482.332H1222.56V517.787L1115.51 528.72V534.413H886.351V315.672Z"]`)[1]
    const three9 = document.querySelectorAll(`.${find} svg path[d="M714.227 315.672H893.577V534.4H823.559V580.703L714.227 570.702V534.4V315.672Z"]`)[1]
    const three10 = document.querySelectorAll(`.${find} svg path[d="M714.19 272.273H893.579V53.5448L810.582 53.5333V10.1333L716.316 16.0159L716.261 53.5333L714.19 53.5448V272.273Z"]`)[0]
    
    three2.classList.add(result)
    three3.classList.add(result)
    three4.classList.add(result)
    three5.classList.add(result)
    three6.classList.add(result)
    three7.classList.add(result)
    three8.classList.add(result)
    three9.classList.add(result)
    three10.classList.add(result)     
  }
}

export default { SelectSVG, findFlat }