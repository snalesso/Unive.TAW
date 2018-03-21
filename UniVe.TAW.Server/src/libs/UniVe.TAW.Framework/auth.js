var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var unive;
(function (unive) {
    var taw;
    (function (taw) {
        var framework;
        (function (framework) {
            var auth;
            (function (auth) {
                var ServerAuthService = /** @class */ (function () {
                    function ServerAuthService(port) {
                        if (port === void 0) { port = 1632; }
                        this.Port = port;
                    }
                    return ServerAuthService;
                }());
                auth.ServerAuthService = ServerAuthService;
                var SignupRequestDto = /** @class */ (function () {
                    function SignupRequestDto(username, password, birthDate, countryId) {
                        this.Username = username;
                        this.Password = password;
                        this.BirthDate = birthDate;
                        this.CountryId = countryId;
                    }
                    return SignupRequestDto;
                }());
                auth.SignupRequestDto = SignupRequestDto;
                var UserDto = /** @class */ (function (_super) {
                    __extends(UserDto, _super);
                    function UserDto(id, username, password, birthDate, countryId) {
                        var _this = _super.call(this, username, password, birthDate, countryId) || this;
                        _this.Id = id;
                        return _this;
                    }
                    UserDto.CreateFrom = function (signupRequest, id) {
                        return new UserDto(id, signupRequest.Username, signupRequest.Password, signupRequest.BirthDate, signupRequest.CountryId);
                    };
                    return UserDto;
                }(SignupRequestDto));
                auth.UserDto = UserDto;
                var Country;
                (function (Country) {
                    Country[Country["Afghanistan"] = 1] = "Afghanistan";
                    Country[Country["Albania"] = 2] = "Albania";
                    Country[Country["Algeria"] = 3] = "Algeria";
                    Country[Country["Andorra"] = 4] = "Andorra";
                    Country[Country["Angola"] = 5] = "Angola";
                    Country[Country["Antigua_Barbuda"] = 6] = "Antigua_Barbuda";
                    Country[Country["Argentina"] = 7] = "Argentina";
                    Country[Country["Armenia"] = 8] = "Armenia";
                    Country[Country["Australia"] = 9] = "Australia";
                    Country[Country["Austria"] = 10] = "Austria";
                    Country[Country["Azerbaijan"] = 11] = "Azerbaijan";
                    Country[Country["Bahamas"] = 12] = "Bahamas";
                    Country[Country["Bahrain"] = 13] = "Bahrain";
                    Country[Country["Bangladesh"] = 14] = "Bangladesh";
                    Country[Country["Barbados"] = 15] = "Barbados";
                    Country[Country["Belarus"] = 16] = "Belarus";
                    Country[Country["Belgium"] = 17] = "Belgium";
                    Country[Country["Belize"] = 18] = "Belize";
                    Country[Country["Benin"] = 19] = "Benin";
                    Country[Country["Bhutan"] = 20] = "Bhutan";
                    Country[Country["Bolivia"] = 21] = "Bolivia";
                    Country[Country["Bosnia_Herzegovina"] = 22] = "Bosnia_Herzegovina";
                    Country[Country["Botswana"] = 23] = "Botswana";
                    Country[Country["Brazil"] = 24] = "Brazil";
                    Country[Country["Brunei"] = 25] = "Brunei";
                    Country[Country["Bulgaria"] = 26] = "Bulgaria";
                    Country[Country["BurkinaFaso"] = 27] = "BurkinaFaso";
                    Country[Country["Burundi"] = 28] = "Burundi";
                    Country[Country["CaboVerde"] = 29] = "CaboVerde";
                    Country[Country["Cambodia"] = 30] = "Cambodia";
                    Country[Country["Cameroon"] = 31] = "Cameroon";
                    Country[Country["Canada"] = 32] = "Canada";
                    Country[Country["CentralAfricanRepublic"] = 33] = "CentralAfricanRepublic";
                    Country[Country["Chad"] = 34] = "Chad";
                    Country[Country["Chile"] = 35] = "Chile";
                    Country[Country["China"] = 36] = "China";
                    Country[Country["Colombia"] = 37] = "Colombia";
                    Country[Country["Comoros"] = 38] = "Comoros";
                    Country[Country["DemocraticRepublicoftheCongo"] = 39] = "DemocraticRepublicoftheCongo";
                    Country[Country["RepublicoftheCongo"] = 40] = "RepublicoftheCongo";
                    Country[Country["CostaRica"] = 41] = "CostaRica";
                    Country[Country["CotedIvoire"] = 42] = "CotedIvoire";
                    Country[Country["Croatia"] = 43] = "Croatia";
                    Country[Country["Cuba"] = 44] = "Cuba";
                    Country[Country["Cyprus"] = 45] = "Cyprus";
                    Country[Country["CzechRepublic"] = 46] = "CzechRepublic";
                    Country[Country["Denmark"] = 47] = "Denmark";
                    Country[Country["Djibouti"] = 48] = "Djibouti";
                    Country[Country["Dominica"] = 49] = "Dominica";
                    Country[Country["DominicanRepublic"] = 50] = "DominicanRepublic";
                    Country[Country["Ecuador"] = 51] = "Ecuador";
                    Country[Country["Egypt"] = 52] = "Egypt";
                    Country[Country["ElSalvador"] = 53] = "ElSalvador";
                    Country[Country["EquatorialGuinea"] = 54] = "EquatorialGuinea";
                    Country[Country["Eritrea"] = 55] = "Eritrea";
                    Country[Country["Estonia"] = 56] = "Estonia";
                    Country[Country["Ethiopia"] = 57] = "Ethiopia";
                    Country[Country["Fiji"] = 58] = "Fiji";
                    Country[Country["Finland"] = 59] = "Finland";
                    Country[Country["France"] = 60] = "France";
                    Country[Country["Gabon"] = 61] = "Gabon";
                    Country[Country["Gambia"] = 62] = "Gambia";
                    Country[Country["Georgia"] = 63] = "Georgia";
                    Country[Country["Germany"] = 64] = "Germany";
                    Country[Country["Ghana"] = 65] = "Ghana";
                    Country[Country["Greece"] = 66] = "Greece";
                    Country[Country["Grenada"] = 67] = "Grenada";
                    Country[Country["Guatemala"] = 68] = "Guatemala";
                    Country[Country["Guinea"] = 69] = "Guinea";
                    Country[Country["Guinea_Bissau"] = 70] = "Guinea_Bissau";
                    Country[Country["Guyana"] = 71] = "Guyana";
                    Country[Country["Haiti"] = 72] = "Haiti";
                    Country[Country["Honduras"] = 73] = "Honduras";
                    Country[Country["Hungary"] = 74] = "Hungary";
                    Country[Country["Iceland"] = 75] = "Iceland";
                    Country[Country["India"] = 76] = "India";
                    Country[Country["Indonesia"] = 77] = "Indonesia";
                    Country[Country["Iran"] = 78] = "Iran";
                    Country[Country["Iraq"] = 79] = "Iraq";
                    Country[Country["Ireland"] = 80] = "Ireland";
                    Country[Country["Israel"] = 81] = "Israel";
                    Country[Country["Italy"] = 82] = "Italy";
                    Country[Country["Jamaica"] = 83] = "Jamaica";
                    Country[Country["Japan"] = 84] = "Japan";
                    Country[Country["Jordan"] = 85] = "Jordan";
                    Country[Country["Kazakhstan"] = 86] = "Kazakhstan";
                    Country[Country["Kenya"] = 87] = "Kenya";
                    Country[Country["Kiribati"] = 88] = "Kiribati";
                    Country[Country["Kosovo"] = 89] = "Kosovo";
                    Country[Country["Kuwait"] = 90] = "Kuwait";
                    Country[Country["Kyrgyzstan"] = 91] = "Kyrgyzstan";
                    Country[Country["Laos"] = 92] = "Laos";
                    Country[Country["Latvia"] = 93] = "Latvia";
                    Country[Country["Lebanon"] = 94] = "Lebanon";
                    Country[Country["Lesotho"] = 95] = "Lesotho";
                    Country[Country["Liberia"] = 96] = "Liberia";
                    Country[Country["Libya"] = 97] = "Libya";
                    Country[Country["Liechtenstein"] = 98] = "Liechtenstein";
                    Country[Country["Lithuania"] = 99] = "Lithuania";
                    Country[Country["Luxembourg"] = 100] = "Luxembourg";
                    Country[Country["Macedonia"] = 101] = "Macedonia";
                    Country[Country["Madagascar"] = 102] = "Madagascar";
                    Country[Country["Malawi"] = 103] = "Malawi";
                    Country[Country["Malaysia"] = 104] = "Malaysia";
                    Country[Country["Maldives"] = 105] = "Maldives";
                    Country[Country["Mali"] = 106] = "Mali";
                    Country[Country["Malta"] = 107] = "Malta";
                    Country[Country["MarshallIslands"] = 108] = "MarshallIslands";
                    Country[Country["Mauritania"] = 109] = "Mauritania";
                    Country[Country["Mauritius"] = 110] = "Mauritius";
                    Country[Country["Mexico"] = 111] = "Mexico";
                    Country[Country["Micronesia"] = 112] = "Micronesia";
                    Country[Country["Moldova"] = 113] = "Moldova";
                    Country[Country["Monaco"] = 114] = "Monaco";
                    Country[Country["Mongolia"] = 115] = "Mongolia";
                    Country[Country["Montenegro"] = 116] = "Montenegro";
                    Country[Country["Morocco"] = 117] = "Morocco";
                    Country[Country["Mozambique"] = 118] = "Mozambique";
                    Country[Country["Myanmar"] = 119] = "Myanmar";
                    Country[Country["Namibia"] = 120] = "Namibia";
                    Country[Country["Nauru"] = 121] = "Nauru";
                    Country[Country["Nepal"] = 122] = "Nepal";
                    Country[Country["Netherlands"] = 123] = "Netherlands";
                    Country[Country["NewZealand"] = 124] = "NewZealand";
                    Country[Country["Nicaragua"] = 125] = "Nicaragua";
                    Country[Country["Niger"] = 126] = "Niger";
                    Country[Country["Nigeria"] = 127] = "Nigeria";
                    Country[Country["NorthKorea"] = 128] = "NorthKorea";
                    Country[Country["Norway"] = 129] = "Norway";
                    Country[Country["Oman"] = 130] = "Oman";
                    Country[Country["Pakistan"] = 131] = "Pakistan";
                    Country[Country["Palau"] = 132] = "Palau";
                    Country[Country["Palestine"] = 133] = "Palestine";
                    Country[Country["Panama"] = 134] = "Panama";
                    Country[Country["PapuaNewGuinea"] = 135] = "PapuaNewGuinea";
                    Country[Country["Paraguay"] = 136] = "Paraguay";
                    Country[Country["Peru"] = 137] = "Peru";
                    Country[Country["Philippines"] = 138] = "Philippines";
                    Country[Country["Poland"] = 139] = "Poland";
                    Country[Country["Portugal"] = 140] = "Portugal";
                    Country[Country["Qatar"] = 141] = "Qatar";
                    Country[Country["Romania"] = 142] = "Romania";
                    Country[Country["Russia"] = 143] = "Russia";
                    Country[Country["Rwanda"] = 144] = "Rwanda";
                    Country[Country["SaintKitts_Nevis"] = 145] = "SaintKitts_Nevis";
                    Country[Country["SaintLucia"] = 146] = "SaintLucia";
                    Country[Country["SaintVincent_theGrenadines"] = 147] = "SaintVincent_theGrenadines";
                    Country[Country["Samoa"] = 148] = "Samoa";
                    Country[Country["SanMarino"] = 149] = "SanMarino";
                    Country[Country["SaoTome_Principe"] = 150] = "SaoTome_Principe";
                    Country[Country["SaudiArabia"] = 151] = "SaudiArabia";
                    Country[Country["Senegal"] = 152] = "Senegal";
                    Country[Country["Serbia"] = 153] = "Serbia";
                    Country[Country["Seychelles"] = 154] = "Seychelles";
                    Country[Country["SierraLeone"] = 155] = "SierraLeone";
                    Country[Country["Singapore"] = 156] = "Singapore";
                    Country[Country["Slovakia"] = 157] = "Slovakia";
                    Country[Country["Slovenia"] = 158] = "Slovenia";
                    Country[Country["SolomonIslands"] = 159] = "SolomonIslands";
                    Country[Country["Somalia"] = 160] = "Somalia";
                    Country[Country["SouthAfrica"] = 161] = "SouthAfrica";
                    Country[Country["SouthKorea"] = 162] = "SouthKorea";
                    Country[Country["SouthSudan"] = 163] = "SouthSudan";
                    Country[Country["Spain"] = 164] = "Spain";
                    Country[Country["SriLanka"] = 165] = "SriLanka";
                    Country[Country["Sudan"] = 166] = "Sudan";
                    Country[Country["Suriname"] = 167] = "Suriname";
                    Country[Country["Swaziland"] = 168] = "Swaziland";
                    Country[Country["Sweden"] = 169] = "Sweden";
                    Country[Country["Switzerland"] = 170] = "Switzerland";
                    Country[Country["Syria"] = 171] = "Syria";
                    Country[Country["Taiwan"] = 172] = "Taiwan";
                    Country[Country["Tajikistan"] = 173] = "Tajikistan";
                    Country[Country["Tanzania"] = 174] = "Tanzania";
                    Country[Country["Thailand"] = 175] = "Thailand";
                    Country[Country["Timor_Leste"] = 176] = "Timor_Leste";
                    Country[Country["Togo"] = 177] = "Togo";
                    Country[Country["Tonga"] = 178] = "Tonga";
                    Country[Country["Trinidad_Tobago"] = 179] = "Trinidad_Tobago";
                    Country[Country["Tunisia"] = 180] = "Tunisia";
                    Country[Country["Turkey"] = 181] = "Turkey";
                    Country[Country["Turkmenistan"] = 182] = "Turkmenistan";
                    Country[Country["Tuvalu"] = 183] = "Tuvalu";
                    Country[Country["Uganda"] = 184] = "Uganda";
                    Country[Country["Ukraine"] = 185] = "Ukraine";
                    Country[Country["UnitedArabEmirates"] = 186] = "UnitedArabEmirates";
                    Country[Country["UnitedKingdom"] = 187] = "UnitedKingdom";
                    Country[Country["UnitedStatesofAmerica"] = 188] = "UnitedStatesofAmerica";
                    Country[Country["Uruguay"] = 189] = "Uruguay";
                    Country[Country["Uzbekistan"] = 190] = "Uzbekistan";
                    Country[Country["Vanuatu"] = 191] = "Vanuatu";
                    Country[Country["VaticanCity"] = 192] = "VaticanCity";
                    Country[Country["Venezuela"] = 193] = "Venezuela";
                    Country[Country["Vietnam"] = 194] = "Vietnam";
                    Country[Country["Yemen"] = 195] = "Yemen";
                    Country[Country["Zambia"] = 196] = "Zambia";
                    Country[Country["Zimbabwe"] = 197] = "Zimbabwe";
                })(Country = auth.Country || (auth.Country = {}));
            })(auth = framework.auth || (framework.auth = {}));
        })(framework = taw.framework || (taw.framework = {}));
    })(taw = unive.taw || (unive.taw = {}));
})(unive || (unive = {}));
