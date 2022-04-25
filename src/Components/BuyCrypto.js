const BuyCrpto = () => {
    return(
        <div className="flex flex-col gap-8 items-center w-4/5 sm:w-fit">
            <h1 className="text-d font-poppins-Regular text-3xl font-bold">Buy Crypto with Fiat</h1>
            <div className=" flex-1 flex-col">
            <p className="text-white font-poppins-Regular px-2">Buy crypto with fiat money using credit cards like Visa and Mastercard</p>
            <div className="embedded-container shadow-2xl shadow-slate-900 h-full">
            <div className="loader-container">
                <svg width='92' height='60' viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="loader"> 
                <path d = 'M16.2232 18.8309L22.282 24.912C22.7953 25.4272 22.7948 26.2647 22.281 26.7792L17.651 31.4158C16.8619 32.1947 15.5719 32.1947 14.7828 31.4158L0.591812 17.4093C-0.197271 16.6305 -0.197271 15.3571 0.591812 14.5783L14.7828 0.584122C15.5719 -0.194707 16.8619 -0.194707 17.651 0.584122L22.281 5.22078C22.7948 5.73535 22.7953 6.57281 22.282 7.08795L16.2232 13.1691C14.645 14.7267 14.645 17.2733 16.2232 18.8309Z' fill="#21BF73">
                </path>
                    <path d = 'M34.4433 18.8309L28.3845 24.912C27.8712 25.4272 27.8717 26.2647 28.3855 26.7792L33.0155 31.4158C33.8046 32.1947 35.0946 32.1947 35.8837 31.4158L50.0747 17.4093C50.8638 16.6305 50.8638 15.3571 50.0747 14.5783L35.8837 0.584122C35.0946 -0.194707 33.8046 -0.194707 33.0155 0.584122L28.3855 5.22078C27.8717 5.73535 27.8712 6.57281 28.3845 7.08795L34.4433 13.1691C36.0215 14.7267 36.0215 17.2733 34.4433 18.8309Z' fill="#0A6E5C">
                    </path>
               <path d ='M17.8128 17.157C17.1737 16.518 17.1737 15.482 17.8128 14.843L24.1765 8.47926C24.8155 7.84025 25.8515 7.84025 26.4905 8.47926L32.8542 14.843C33.4932 15.482 33.4932 16.518 32.8542 17.157L26.4905 23.5207C25.8515 24.1598 24.8155 24.1598 24.1765 23.5207L17.8128 17.157Z" fill="21BF73' fill="#21BF73">

               </path>
                </svg>
            </div>
            </div>
            </div>
        </div>  
    )
}
export default BuyCrpto