import React from 'react'
import { GrServices } from "react-icons/gr";
import {MonCompte} from '../MonCompte/Compte'
import  { useState,useEffect } from 'react'
import Loader from '../../COMPONENTS/Loader'
import {Link} from 'react-router-dom'
import Logo from "../../ASSETS/Images/1.png"

function Service() {

    
    const [loading, setLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => {
          // Après 5 secondes, masquer le spinner et rediriger l'utilisateur
          setLoading(false);
        }, 2000); // 5000 millisecondes = 5 secondes
    
        // Nettoyer le timer si le composant est démonté avant la fin du délai
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
          {loading ? (
        // Afficher le spinner tant que loading est true
        <Loader />
      ) : (
        <>
        <div className='bg-[#ECEEF2] flex flex-col space-y-6 p-4  '>
            <div className='flex items-center justify-between'>
                    <img src={Logo} alt='logo' className='w-32'/>
                    <MonCompte/>
            </div>
            
                <div className='text-3xl text-center text-[#4E4E4E] font-semibold'>Quel formation désirez vous ?</div>

                <div className='flex justify-center'>
                    <div className=' border-t border-[#dddcdc] w-[500px]'></div>
                </div>

                <div className='flex justify-center'>
                    <div className='text-lg w-[680px] text-center text-[#4E4E4E]'>Qui facere dolores in voluptas aperiam aut voluptatibus esse aut minima pariatur et similique alias ut voluptates error aut nesciunt sint.</div>
                </div>

                <div className=' py-10 grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-y-10 place-content-center place-items-center '>
                    {/* services1 */}
                    <button name='serviceIT' className='bg-white w-[340px] p-6 cursor-pointer rounded-xl shadow focus:bg-[#30c5d2] focus:text-white'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='text-2xl text-[#471069] font-semibold '>Programmation</div>
                            <GrServices className='text-5xl bg-[#30c5d2] text-white w-[60px] p-2 rounded-full h-[60px]' />
                        </div>
                        <div>autem dolorem ex perferendis magnam et iusto mollitia est facere voluptatem id ipsum excepturi. Et earum accusamus aut repellendus internos et molestias totam qui omnis </div>
                    </button>
                    {/* services2 */}
                    <button name='serviceIT' className='bg-white w-[340px] p-6 cursor-pointer rounded-xl shadow focus:bg-[#30c5d2] focus:text-white'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='text-2xl text-[#471069] font-semibold '>Web design</div>
                            <GrServices className='text-5xl bg-[#30c5d2] text-white w-[60px] p-2 rounded-full h-[60px]' />
                        </div>
                        <div>autem dolorem ex perferendis magnam et iusto mollitia est facere voluptatem id ipsum excepturi. Et earum accusamus aut repellendus internos et molestias totam qui omnis </div>
                    </button>
                    {/* services3 */}
                    <button name='serviceIT' className='bg-white w-[340px] p-6 cursor-pointer rounded-xl shadow focus:bg-[#30c5d2] focus:text-white'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='text-2xl text-[#471069] font-semibold '>Maketing digital</div>
                            <GrServices className='text-5xl bg-[#30c5d2] text-white w-[60px] p-2 rounded-full h-[60px]' />
                        </div>
                        <div>autem dolorem ex perferendis magnam et iusto mollitia est facere voluptatem id ipsum excepturi. Et earum accusamus aut repellendus internos et molestias totam qui omnis </div>
                    </button>
                    {/* services4 */}
                    <button name='serviceIT' className='bg-white w-[340px] p-6 cursor-pointer rounded-xl shadow focus:bg-[#30c5d2] focus:text-white'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='text-2xl text-[#471069] font-semibold '>UI / UX designer</div>
                            <GrServices className='text-5xl bg-[#30c5d2] text-white w-[60px] p-2 rounded-full h-[60px]' />
                        </div>
                        <div>autem dolorem ex perferendis magnam et iusto mollitia est facere voluptatem id ipsum excepturi. Et earum accusamus aut repellendus internos et molestias totam qui omnis </div>
                    </button>
                    {/* services5 */}
                    <button name='serviceIT' className='bg-white w-[340px] p-6 cursor-pointer rounded-xl shadow focus:bg-[#30c5d2] focus:text-white'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='text-2xl text-[#471069] font-semibold '>Graphisme</div>
                            <GrServices className='text-5xl bg-[#30c5d2] text-white w-[60px] p-2 rounded-full h-[60px]' />
                        </div>
                        <div>autem dolorem ex perferendis magnam et iusto mollitia est facere voluptatem id ipsum excepturi. Et earum accusamus aut repellendus internos et molestias totam qui omnis </div>
                    </button>
                    {/* services6 */}
                    <button name='serviceIT' className='bg-white w-[340px] p-6 cursor-pointer rounded-xl shadow focus:bg-[#30c5d2] focus:text-white'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='text-2xl text-[#471069] font-semibold '>Cyber sécurité</div>
                            <GrServices className='text-5xl bg-[#30c5d2] text-white w-[60px] p-2 rounded-full h-[60px]' />
                        </div>
                        <div>autem dolorem ex perferendis magnam et iusto mollitia est facere voluptatem id ipsum excepturi. Et earum accusamus aut repellendus internos et molestias totam qui omnis </div>
                    </button>
                </div>
                <div className='flex space-x-20 justify-center'>
                    <Link to='/' className='w-[200px] bg-white py-3 text-center rounded-full shadow'>Précédent</Link>
                    <Link to='Votre_numero_client' className='w-[200px] bg-gradient-to-r from-[#30c5d2] to-[#471069] py-3 rounded-full text-white text-center shadow'>Suivant</Link>
                </div>

                <div className='flex justify-end relative bottom-8 '>
                    <svg width="578" height="259" viewBox="0 0 1078 759" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_70_48)">
                    <path d="M550.556 757.391C582.979 757.391 609.263 731.131 609.263 698.738C609.263 666.345 582.979 640.085 550.556 640.085C518.134 640.085 491.85 666.345 491.85 698.738C491.85 731.131 518.134 757.391 550.556 757.391Z" fill="#6C63FF"/>
                    <path d="M160.668 119.219C177.584 119.219 191.298 105.518 191.298 88.6173C191.298 71.7165 177.584 58.0156 160.668 58.0156C143.752 58.0156 130.039 71.7165 130.039 88.6173C130.039 105.518 143.752 119.219 160.668 119.219Z" fill="#F2F2F2"/>
                    <path d="M373.16 177.235C390.077 177.235 403.79 163.534 403.79 146.633C403.79 129.732 390.077 116.031 373.16 116.031C356.244 116.031 342.531 129.732 342.531 146.633C342.531 163.534 356.244 177.235 373.16 177.235Z" fill="#F2F2F2"/>
                    <path d="M553.109 61.2034C570.025 61.2034 583.738 47.5025 583.738 30.6017C583.738 13.7008 570.025 0 553.109 0C536.193 0 522.479 13.7008 522.479 30.6017C522.479 47.5025 536.193 61.2034 553.109 61.2034Z" fill="#F2F2F2"/>
                    <path d="M665.417 191.26C682.333 191.26 696.047 177.56 696.047 160.659C696.047 143.758 682.333 130.057 665.417 130.057C648.501 130.057 634.788 143.758 634.788 160.659C634.788 177.56 648.501 191.26 665.417 191.26Z" fill="#F2F2F2"/>
                    <path d="M320.835 414.398C337.751 414.398 351.465 400.697 351.465 383.796C351.465 366.895 337.751 353.194 320.835 353.194C303.919 353.194 290.206 366.895 290.206 383.796C290.206 400.697 303.919 414.398 320.835 414.398Z" fill="#F2F2F2"/>
                    <path d="M525.032 527.879C541.948 527.879 555.661 514.178 555.661 497.277C555.661 480.376 541.948 466.676 525.032 466.676C508.116 466.676 494.402 480.376 494.402 497.277C494.402 514.178 508.116 527.879 525.032 527.879Z" fill="#F2F2F2"/>
                    <path d="M744.543 591.632C761.46 591.632 775.173 577.931 775.173 561.031C775.173 544.13 761.46 530.429 744.543 530.429C727.627 530.429 713.914 544.13 713.914 561.031C713.914 577.931 727.627 591.632 744.543 591.632Z" fill="#F2F2F2"/>
                    <path d="M1001.07 577.607C1017.98 577.607 1031.7 563.906 1031.7 547.005C1031.7 530.104 1017.98 516.403 1001.07 516.403C984.149 516.403 970.436 530.104 970.436 547.005C970.436 563.906 984.149 577.607 1001.07 577.607Z" fill="#F2F2F2"/>
                    <path d="M544.268 86.709C452.517 87.3565 377.393 161.849 376.09 253.509C376.078 254.355 376.072 260.306 376.073 268.088C376.073 279.5 380.611 290.443 388.687 298.513C396.763 306.582 407.716 311.116 419.138 311.117C424.8 311.116 430.406 310 435.636 307.833C440.866 305.666 445.617 302.491 449.619 298.489C453.62 294.487 456.793 289.737 458.956 284.509C461.119 279.281 462.23 273.679 462.225 268.022C462.22 262.728 462.218 259.064 462.218 258.839C462.215 244.673 465.903 230.75 472.919 218.44C479.935 206.13 490.038 195.857 502.234 188.631C514.43 181.406 528.298 177.476 542.475 177.229C556.651 176.983 570.648 180.427 583.088 187.225C595.528 194.022 605.983 203.937 613.424 215.996C620.865 228.054 625.036 241.84 625.527 255.998C626.018 270.155 622.811 284.196 616.223 296.74C609.635 309.284 599.892 319.898 587.952 327.539L587.967 327.557C587.967 327.557 526.672 366.982 507.985 421.065L508.001 421.069C504.715 432.148 503.05 443.644 503.057 455.2C503.057 459.95 503.337 501.512 503.877 535.246C504.066 546.885 508.827 557.984 517.134 566.147C525.44 574.311 536.626 578.884 548.277 578.882C554.132 578.881 559.929 577.724 565.334 575.478C570.74 573.231 575.647 569.938 579.774 565.789C583.901 561.64 587.166 556.717 589.381 551.303C591.597 545.888 592.719 540.09 592.682 534.241C592.495 503.347 592.393 467.374 592.393 464.763C592.393 431.554 624.459 398.466 650.798 376.888C681.129 352.041 702.955 318.18 711.722 279.984C713.661 272.12 714.731 264.067 714.911 255.97C714.911 233.639 710.488 211.529 701.898 190.913C693.307 170.297 680.718 151.583 664.856 135.85C648.994 120.116 630.173 107.674 609.477 99.2405C588.781 90.8067 566.619 86.5477 544.268 86.709Z" fill="#6C63FF"/>
                    <path d="M1076.48 759H1.51959C1.11733 758.999 0.731955 758.838 0.447928 758.554C0.163901 758.269 0.00439453 757.884 0.00439453 757.482C0.00439453 757.08 0.163901 756.694 0.447928 756.41C0.731955 756.125 1.11733 755.965 1.51959 755.964H1076.48C1076.88 755.964 1077.27 756.124 1077.55 756.408C1077.84 756.693 1078 757.079 1078 757.482C1078 757.885 1077.84 758.271 1077.55 758.555C1077.27 758.84 1076.88 759 1076.48 759Z" fill="#3F3D56"/>
                    <path d="M802.045 348.089C823.191 348.089 840.332 330.963 840.332 309.837C840.332 288.711 823.191 271.585 802.045 271.585C780.9 271.585 763.758 288.711 763.758 309.837C763.758 330.963 780.9 348.089 802.045 348.089Z" fill="#2F2E41"/>
                    <path d="M731.295 742.255H715.65L708.206 681.959H731.299L731.295 742.255Z" fill="#A0616A"/>
                    <path d="M704.473 737.788H734.648V756.77H685.474C685.474 754.277 685.966 751.809 686.921 749.506C687.875 747.203 689.275 745.11 691.039 743.348C692.803 741.585 694.898 740.187 697.203 739.233C699.508 738.279 701.978 737.788 704.473 737.788Z" fill="#2F2E41"/>
                    <path d="M852.537 742.255H836.892L829.447 681.959H852.541L852.537 742.255Z" fill="#A0616A"/>
                    <path d="M825.715 737.788H855.89V756.77H806.716C806.716 754.277 807.207 751.809 808.162 749.506C809.117 747.203 810.516 745.11 812.281 743.348C814.045 741.585 816.139 740.187 818.444 739.233C820.75 738.279 823.22 737.788 825.715 737.788Z" fill="#2F2E41"/>
                    <path d="M796.227 348.312C813.538 348.312 827.572 334.291 827.572 316.995C827.572 299.699 813.538 285.678 796.227 285.678C778.915 285.678 764.881 299.699 764.881 316.995C764.881 334.291 778.915 348.312 796.227 348.312Z" fill="#A0616A"/>
                    <path d="M814.91 449.342L828.935 417.147C832.342 409.594 833.318 401.171 831.729 393.04C830.141 384.91 826.065 377.472 820.066 371.754C818.834 370.537 817.525 369.4 816.147 368.35C809.227 362.941 800.699 359.993 791.912 359.972C786.004 359.995 780.171 361.291 774.811 363.772C774.351 363.976 773.905 364.193 773.445 364.41C772.564 364.83 771.697 365.289 770.854 365.761C765.36 368.913 760.684 373.311 757.204 378.6C753.723 383.889 751.536 389.921 750.817 396.21L744.627 448.029C743.071 452.096 687.529 598.984 706.954 711.127C707.16 712.324 707.745 713.424 708.622 714.266C709.499 715.108 710.623 715.648 711.829 715.806L731.521 718.484C732.959 718.68 734.418 718.325 735.604 717.49C736.791 716.655 737.616 715.402 737.915 713.983L770.957 556.626C771.162 555.649 771.69 554.768 772.456 554.126C773.222 553.483 774.181 553.115 775.181 553.082C776.18 553.048 777.162 553.35 777.969 553.939C778.777 554.529 779.363 555.372 779.635 556.333L826.319 721.812C826.652 723.014 827.37 724.074 828.364 724.83C829.357 725.585 830.571 725.994 831.82 725.994C832.192 725.992 832.564 725.957 832.93 725.892L856.987 721.263C858.385 721.002 859.636 720.229 860.493 719.094C861.35 717.959 861.752 716.546 861.62 715.13C858.085 675.743 839.298 478.452 814.91 449.342Z" fill="#2F2E41"/>
                    <path d="M674.41 343.057C674.193 344.919 674.386 346.806 674.978 348.585C675.569 350.364 676.543 351.992 677.833 353.354C679.122 354.716 680.694 355.779 682.439 356.468C684.183 357.157 686.058 357.456 687.931 357.343L705.452 399.41L718.706 379.781L700.035 342.843C699.637 339.712 698.103 336.836 695.724 334.76C693.345 332.684 690.286 331.552 687.127 331.578C683.969 331.605 680.929 332.788 678.586 334.904C676.242 337.019 674.756 339.921 674.41 343.057Z" fill="#A0616A"/>
                    <path d="M794.489 491.7C796.352 491.478 798.143 490.85 799.737 489.861C801.331 488.872 802.688 487.546 803.713 485.976C804.739 484.406 805.407 482.631 805.671 480.775C805.936 478.92 805.789 477.029 805.243 475.235L842.107 448.41L819.913 440.106L788.309 466.853C785.354 467.97 782.913 470.131 781.446 472.926C779.98 475.721 779.591 478.957 780.352 482.019C781.114 485.082 782.974 487.759 785.579 489.543C788.185 491.328 791.355 492.095 794.489 491.7Z" fill="#A0616A"/>
                    <path d="M734.393 427.456C732.98 427.454 731.57 427.315 730.184 427.041C726.831 426.403 723.686 424.951 721.027 422.813C718.368 420.675 716.276 417.916 714.936 414.78L690.389 384.875C689.87 384.243 689.492 383.507 689.281 382.717C689.069 381.927 689.03 381.101 689.164 380.295C689.298 379.488 689.603 378.72 690.059 378.04C690.515 377.361 691.111 376.787 691.807 376.357L709.271 365.556C709.916 365.157 710.633 364.89 711.382 364.77C712.131 364.649 712.896 364.678 713.633 364.855C714.371 365.032 715.066 365.352 715.679 365.799C716.291 366.245 716.809 366.809 717.203 367.456L734.504 395.934L767.637 371.47C770.275 370.088 773.323 369.7 776.223 370.378C779.123 371.055 781.683 372.753 783.434 375.16C785.186 377.568 786.011 380.524 785.761 383.489C785.511 386.455 784.201 389.231 782.071 391.312L749.001 421.45C745.115 425.299 739.865 427.457 734.393 427.456Z" fill="#2F2E41"/>
                    <path d="M823.921 472.43C823.876 472.43 823.831 472.431 823.786 472.429C822.981 472.41 822.188 472.221 821.461 471.876C820.733 471.531 820.085 471.038 819.561 470.427L804.034 452.329C803.505 451.713 803.113 450.992 802.884 450.213C802.655 449.434 802.594 448.615 802.705 447.811C802.816 447.007 803.096 446.236 803.528 445.548C803.96 444.86 804.532 444.271 805.208 443.821L834.283 424.456L807.943 392.818C806.411 390.266 805.849 387.249 806.36 384.317C806.871 381.385 808.42 378.735 810.725 376.85C813.031 374.965 815.938 373.972 818.915 374.052C821.893 374.132 824.742 375.279 826.943 377.285L858.955 408.54C861.475 410.84 863.398 413.716 864.56 416.921C865.722 420.127 866.088 423.566 865.627 426.944C865.166 430.323 863.891 433.538 861.912 436.316C859.933 439.094 857.309 441.35 854.265 442.891L828.1 470.629C827.563 471.197 826.915 471.65 826.197 471.96C825.478 472.27 824.704 472.43 823.921 472.43Z" fill="#2F2E41"/>
                    <path d="M788.257 405.745C788.008 405.745 787.759 405.73 787.511 405.698C786.43 405.567 785.409 405.128 784.57 404.435C783.731 403.741 783.108 402.822 782.776 401.785L771.108 366.046C770.816 365.142 770.861 364.163 771.235 363.29C771.609 362.417 772.287 361.709 773.143 361.297L773.521 361.118C773.865 360.955 774.205 360.794 774.552 360.639C779.992 358.118 785.915 356.803 791.912 356.785C799.698 356.799 807.31 359.084 813.814 363.36C814.686 363.94 815.295 364.838 815.51 365.863C815.726 366.887 815.529 367.954 814.964 368.836L793.077 403.094C792.564 403.907 791.852 404.577 791.009 405.041C790.166 405.505 789.219 405.747 788.257 405.745Z" fill="#E6E6E6"/>
                    <path d="M832.231 292.76C839.15 292.76 844.759 287.156 844.759 280.243C844.759 273.33 839.15 267.726 832.231 267.726C825.312 267.726 819.703 273.33 819.703 280.243C819.703 287.156 825.312 292.76 832.231 292.76Z" fill="#2F2E41"/>
                    <path d="M789.283 266.484C780.483 266.484 772.043 269.977 765.82 276.194C759.597 282.411 756.101 290.844 756.101 299.636V313.662H773.368L781.626 299.636L784.103 313.662H836.504L822.465 299.636C822.465 290.844 818.969 282.411 812.746 276.194C806.523 269.977 798.083 266.484 789.283 266.484Z" fill="#2F2E41"/>
                    <path d="M838.67 271.669C840.056 267.341 842.924 263.639 846.771 261.215C850.618 258.79 855.197 257.799 859.703 258.414C867.688 259.747 874 266.159 877.761 273.321C881.523 280.482 883.26 288.497 885.788 296.18C888.317 303.863 891.903 311.587 898.286 316.561C904.67 321.534 914.465 322.883 920.735 317.767C920.018 323.099 917.643 328.071 913.943 331.979C910.244 335.888 905.408 338.536 900.119 339.549C894.831 340.561 889.358 339.887 884.474 337.621C879.591 335.355 875.544 331.613 872.905 326.924C869.597 321.043 868.743 314.151 867.762 307.477C866.781 300.804 865.507 293.898 861.557 288.427C857.608 282.957 850.214 279.383 843.94 281.875L838.67 271.669Z" fill="#2F2E41"/>
                    <path d="M431.297 290.765C419.876 290.763 408.922 286.23 400.846 278.16C392.77 270.091 388.233 259.148 388.232 247.736C388.232 239.954 388.237 234.003 388.249 233.157C388.612 206.5 395.332 180.313 407.85 156.769C387.282 184.901 375.973 218.723 375.487 253.558C375.475 254.404 375.469 260.355 375.47 268.137C375.471 279.549 380.008 290.492 388.084 298.562C396.16 306.631 407.114 311.165 418.535 311.166C427.921 311.162 437.048 308.098 444.532 302.439C452.015 296.78 457.445 288.835 459.997 279.811C452.111 286.876 441.889 290.778 431.297 290.765Z" fill="#3F3D56"/>
                    <path d="M547.187 177.374C560.391 178.004 573.245 181.826 584.645 188.513C596.045 195.199 605.65 204.55 612.636 215.763C619.622 226.975 623.78 239.713 624.752 252.885C625.725 266.056 623.484 279.267 618.221 291.382C625.833 282.45 631.429 271.982 634.625 260.694C637.822 249.405 638.544 237.56 636.744 225.967C634.943 214.375 630.662 203.306 624.192 193.516C617.721 183.726 609.214 175.445 599.25 169.238C589.286 163.03 578.1 159.042 566.453 157.546C554.807 156.049 542.974 157.079 531.762 160.566C520.55 164.052 510.223 169.913 501.484 177.749C492.744 185.584 485.799 195.211 481.121 205.971C489.206 196.468 499.368 188.948 510.822 183.99C522.277 179.032 534.718 176.768 547.187 177.374Z" fill="#3F3D56"/>
                    <path d="M560.437 558.529C548.785 558.532 537.6 553.958 529.293 545.795C520.987 537.631 516.226 526.533 516.037 514.893C515.496 481.16 515.217 439.598 515.217 434.848C515.209 423.292 516.874 411.796 520.16 400.717L520.144 400.713C522.085 395.152 524.428 389.739 527.156 384.518C518.782 395.668 512.118 408.002 507.382 421.114L507.398 421.118C504.112 432.197 502.447 443.693 502.454 455.249C502.454 459.999 502.734 501.561 503.274 535.295C503.463 546.934 508.225 558.033 516.531 566.196C524.837 574.359 536.023 578.933 547.674 578.93C557.281 578.929 566.629 575.815 574.314 570.057C582 564.298 587.61 556.205 590.303 546.992C582.139 554.429 571.485 558.545 560.437 558.529Z" fill="#3F3D56"/>
                    <path d="M161.495 742.837L177.141 742.835L184.585 682.54L161.492 682.541L161.495 742.837Z" fill="#FFB8B8"/>
                    <path d="M207.317 757.35L158.143 757.352L158.142 738.371L188.317 738.369C193.356 738.369 198.188 740.369 201.751 743.928C205.315 747.488 207.317 752.316 207.317 757.35Z" fill="#2F2E41"/>
                    <path d="M105.341 742.837L120.987 742.835L128.431 682.54L105.337 682.541L105.341 742.837Z" fill="#FFB8B8"/>
                    <path d="M151.163 757.35L101.989 757.352L101.988 738.371L132.163 738.369C137.202 738.369 142.034 740.369 145.597 743.928C149.16 747.488 151.162 752.316 151.163 757.35Z" fill="#2F2E41"/>
                    <path d="M119.014 724.292L103.731 723.489C102.943 723.448 102.171 723.251 101.46 722.909C100.749 722.567 100.112 722.088 99.5878 721.499C99.0633 720.91 98.661 720.223 98.4043 719.477C98.1475 718.732 98.0414 717.943 98.092 717.156L116.358 515.101L200.476 537.779L208.58 535.57L183.236 714.443C183.021 715.788 182.352 717.02 181.341 717.934C180.329 718.849 179.036 719.391 177.674 719.472L161.2 720.239C160.376 720.285 159.552 720.159 158.779 719.871C158.006 719.582 157.302 719.136 156.71 718.561C156.119 717.987 155.653 717.296 155.343 716.532C155.032 715.768 154.883 714.949 154.906 714.125L157.891 606.768C157.905 606.272 157.732 605.788 157.407 605.413C157.082 605.037 156.628 604.797 156.134 604.739C155.64 604.682 155.143 604.811 154.74 605.101C154.337 605.392 154.057 605.823 153.956 606.309L125.168 719.551C124.897 720.895 124.167 722.103 123.104 722.969C122.04 723.835 120.709 724.306 119.337 724.301C119.23 724.301 119.122 724.299 119.014 724.292Z" fill="#2F2E41"/>
                    <path d="M164.304 349.777C181.616 349.777 195.65 335.756 195.65 318.46C195.65 301.164 181.616 287.143 164.304 287.143C146.993 287.143 132.959 301.164 132.959 318.46C132.959 335.756 146.993 349.777 164.304 349.777Z" fill="#FFB8B8"/>
                    <path d="M112.116 410.468L115.563 484.763L116.809 511.792C116.858 512.969 117.258 514.104 117.957 515.052C118.656 516.001 119.622 516.719 120.732 517.116L201.564 546.371C202.217 546.613 202.908 546.734 203.605 546.728C204.401 546.732 205.19 546.575 205.924 546.268C206.659 545.961 207.323 545.508 207.879 544.939C208.434 544.369 208.869 543.693 209.158 542.951C209.446 542.21 209.582 541.418 209.557 540.623L206.243 407.038C206.025 396.078 201.987 385.537 194.825 377.233C187.662 368.928 177.824 363.381 167.007 361.547C166.225 361.428 165.43 361.308 164.634 361.202C157.927 360.371 151.118 361.017 144.687 363.097C138.257 365.177 132.36 368.639 127.413 373.241C122.29 377.948 118.265 383.722 115.622 390.155C112.978 396.588 111.782 403.522 112.116 410.468Z" fill="#CCCCCC"/>
                    <path d="M240.177 531.546C238.265 530.953 236.518 529.922 235.076 528.535C233.634 527.148 232.536 525.444 231.87 523.557C231.205 521.671 230.99 519.656 231.242 517.672C231.495 515.688 232.208 513.79 233.325 512.131L205.914 475.715L229.568 474.252L251.971 509.058C254.37 510.91 256.039 513.548 256.685 516.507C257.332 519.466 256.915 522.558 255.508 525.241C254.101 527.924 251.793 530.026 248.99 531.179C246.187 532.332 243.066 532.462 240.177 531.546Z" fill="#FFB8B8"/>
                    <path d="M220.904 505.541C220.178 505.246 219.517 504.811 218.961 504.26C218.404 503.709 217.962 503.052 217.661 502.33L176.364 404.029C175.554 402.104 175.131 400.039 175.12 397.951C175.109 395.863 175.51 393.793 176.3 391.86C177.09 389.927 178.254 388.169 179.724 386.685C181.195 385.202 182.943 384.022 184.87 383.214C186.797 382.406 188.865 381.985 190.955 381.976C193.045 381.966 195.116 382.369 197.05 383.159C198.984 383.95 200.744 385.114 202.227 386.584C203.711 388.054 204.89 389.803 205.698 391.728L246.994 490.03C247.605 491.488 247.611 493.128 247.013 494.59C246.415 496.053 245.26 497.218 243.803 497.832L225.469 505.519C224.748 505.824 223.973 505.983 223.189 505.987C222.405 505.991 221.629 505.839 220.904 505.541Z" fill="#CCCCCC"/>
                    <path d="M154.227 502.074L193.891 426.196C194.656 424.737 195.969 423.64 197.542 423.147C199.115 422.653 200.82 422.804 202.282 423.565L259.855 453.606C261.315 454.37 262.413 455.682 262.906 457.253C263.4 458.825 263.25 460.528 262.488 461.989L222.824 537.867C222.059 539.326 220.746 540.423 219.173 540.916C217.6 541.409 215.895 541.259 214.433 540.498L156.86 510.457C155.399 509.693 154.302 508.381 153.808 506.809C153.315 505.238 153.465 503.535 154.227 502.074Z" fill="#3F3D56"/>
                    <path d="M180.827 467.407C180.122 465.535 178.988 463.854 177.517 462.498C176.047 461.141 174.279 460.147 172.355 459.595C170.431 459.042 168.404 458.947 166.437 459.316C164.47 459.685 162.616 460.508 161.024 461.72L123.019 436.532L122.955 460.21L159.054 480.498C161.047 482.781 163.78 484.29 166.775 484.76C169.77 485.23 172.835 484.632 175.433 483.07C178.03 481.509 179.994 479.083 180.981 476.219C181.967 473.355 181.913 470.235 180.827 467.407Z" fill="#FFB8B8"/>
                    <path d="M132.777 472.732L101.717 448.151C98.3575 447.024 95.3214 445.099 92.8699 442.541C90.4185 439.984 88.6248 436.87 87.6429 433.468C86.661 430.065 86.5202 426.475 87.2326 423.006C87.945 419.538 89.4893 416.293 91.733 413.552L119.934 376.627C121.894 374.234 124.65 372.626 127.699 372.096C130.747 371.567 133.885 372.151 136.538 373.742C139.191 375.334 141.182 377.826 142.147 380.763C143.113 383.701 142.988 386.887 141.795 389.74L119.482 426.207L152.273 441.746C153.036 442.107 153.713 442.626 154.26 443.268C154.807 443.91 155.211 444.661 155.446 445.471C155.681 446.281 155.742 447.131 155.623 447.966C155.505 448.801 155.211 449.601 154.76 450.314L141.523 471.243C141.075 471.949 140.484 472.554 139.788 473.018C139.092 473.481 138.306 473.794 137.481 473.935C137.449 473.94 137.416 473.945 137.383 473.95C136.572 474.073 135.746 474.028 134.953 473.818C134.161 473.608 133.42 473.239 132.777 472.732Z" fill="#CCCCCC"/>
                    <path d="M140.619 339.43C140.484 339.037 140.442 338.618 140.494 338.206C140.547 337.794 140.693 337.4 140.921 337.053C141.15 336.706 141.455 336.416 141.814 336.205C142.172 335.994 142.573 335.868 142.988 335.836C143.837 335.882 144.668 336.099 145.43 336.475C146.193 336.851 146.871 337.377 147.424 338.022C148.559 339.329 149.879 340.462 151.344 341.385C152.86 342.149 154.917 342.04 155.781 340.584C156.593 339.217 156.037 337.386 155.545 335.798C154.295 331.758 153.595 327.567 153.465 323.34C153.324 318.622 153.99 313.698 156.604 310.018C159.978 305.269 166.012 303.466 171.722 303.597C177.432 303.728 183.049 305.489 188.705 306.602C190.657 306.986 192.952 307.183 194.258 305.671C195.647 304.063 195.137 301.461 194.546 299.29C193.014 293.658 191.388 287.834 187.827 283.285C183.976 278.559 178.476 275.465 172.434 274.628C166.634 273.91 160.745 274.578 155.253 276.576C146.305 279.394 138.432 284.874 132.686 292.283C126.762 300.163 124.203 310.065 125.567 319.825C126.899 328.326 131.408 336.005 138.183 341.316L140.619 339.43Z" fill="#2F2E41"/>
                    <path d="M537.622 743.085C529.283 739.456 521.901 733.941 516.061 726.974C510.22 720.006 506.08 711.778 503.967 702.939C501.855 694.099 501.827 684.89 503.887 676.038C505.947 667.187 510.038 658.934 515.837 651.932C509.113 656.837 503.511 663.114 499.401 670.347C495.292 677.58 492.769 685.603 492 693.885C491.232 702.167 492.235 710.517 494.943 718.381C497.652 726.246 502.004 733.445 507.71 739.501C513.416 745.557 520.346 750.331 528.04 753.506C535.734 756.682 544.016 758.186 552.337 757.919C560.657 757.652 568.825 755.62 576.3 751.958C583.774 748.296 590.383 743.087 595.689 736.678C587.414 742.721 577.698 746.492 567.511 747.616C557.323 748.741 547.018 747.178 537.622 743.085Z" fill="#3F3D56"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_70_48">
                    <rect width="1078" height="759" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>

        </div>
        </>
      )}
    </>
  )
}

export default Service