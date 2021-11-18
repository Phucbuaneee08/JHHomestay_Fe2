import logo from './JadeHill.svg';
import acc_logo from './account.svg';
import search_logo from './search.svg';

const Header = () => {
 
    return(
        <div class="border-solid shadow border-green-300 flex items-center justify-between p-0">
            {/*logo + tên homestay */}
            <a class="flex-shrink-0 visible" href="/#">
                <img class="mx-auto h-20 w-20 " src={logo} alt="Logo" href="/#"/>
            </a>
            <div class="flex items-center flex-shrink text-white mr-6">
                <a class="text-white no-underline" href="/#">
                    <span class="flex-shrink font-semibold text-l lg:text-xl pl-2 text-green-700 font-sans"><i class="em em-grinning" href="/#"></i> Jade Hill Homestays</span>
                </a>
            </div>
            {/*search box */}
            <div class="mx-3 md:justify-end sm:justify-start flex-grow lg:flex lg:items-center pt-0 px-0 lg:pt-0">
                <div class="relative">
                    <input type="text" class="h-12 w-80 pl-5 pr-20 rounded-md z-0 shadow focus:outline-none" placeholder="Tìm kiếm"/>
                    <div class="absolute top-0 right-0 items-center justify-center pr-0"> 
                        <button class="h-9  w-14 mt-1.5 mr-1.5 rounded-md bg-green-600 hover:bg-green-500">
                            <img class="mx-auto h-5 w-auto" src={search_logo} alt="Logo" href="/#"/>
                        </button> 
                    </div>
                </div>
            </div> 
            {/*dropdown */}
            <div class="mx-8 pt-1 h-auto flex flex-shrink-0 visible justify-center items-center">
                <a href="/#">
                    <img class="mx-auto h-10 w-auto" src={acc_logo} alt="AccountLogo" href="/#"/>
                </a>
            </div>

        </div>
    )
}

export default Header