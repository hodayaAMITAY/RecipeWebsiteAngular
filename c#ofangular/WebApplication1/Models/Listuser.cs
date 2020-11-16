using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Listuser
    {
        public static List<recipe> recipeList { get; set; }
        public static List<categorey> categoreyList { get; set; }
        public static List<User> userList { get; set; }
        static Listuser()
        {
            userList = new List<User>()
            {
                new User(){userCode="1234",userName="sara",userAdrees="hsg",Mail="jhgh",userPassword=123456},
                new User(){userCode="1224",userName="sari",userAdrees="uyr",Mail="shx",userPassword=456789},
                new User(){userCode="1114",userName="hodaya",userAdrees="hhss",Mail="jhsxa",userPassword=852147},
                new User(){userCode="2222",userName="morya",userAdrees="haha",Mail="jaah",userPassword=789654},
                new User(){userCode="1124",userName="shireal",userAdrees="hshdgj",Mail="jywsh",userPassword=784512},
            };
            categoreyList = new List<categorey>() {
            new categorey() { code = 145,name = "dough",Icon = "notfound"},
            new categorey() { code = 009,name = "bake",Icon = "notfound"}
            
        };

            recipeList = new List<recipe>() {
            new recipe() { recipeName = "fruitcake", recipeCategory = categoreyList[0], time = 100, level = 2, listIngrediens = new List<string>() { "choclate", "floor" }, make = new List<string>() { "mix", "bake" }, user = userList[0], picture = "1-עותק.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "pay", recipeCategory = categoreyList[0], time = 40, level = 1, listIngrediens = new List<string>() { "sogar", "flour" },make = new List<string>() { "mix", "bake" }, user = userList[1], picture = "2-עותק.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "fruitcake", recipeCategory = categoreyList[0], time = 30, level = 1, listIngrediens = new List<string>() { "vanila", "flour" },make = new List<string>() { "mix", "bake" }, user = userList[1], picture = "3-עותק.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "Stripe cake", recipeCategory = categoreyList[0], time = 20, level = 3, listIngrediens = new List<string>() { "aplle", "water" },make = new List<string>() { "mix", "cook" }, user = userList[1], picture = "6.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "Cheesecake", recipeCategory = categoreyList[0], time = 60, level = 3, listIngrediens = new List<string>() { "vegetabels", "water" },make = new List<string>() { "mix", "cook" }, user = userList[1], picture = "8-עותק.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "RibaCookies", recipeCategory = categoreyList[1], time = 45, level = 2, listIngrediens = new List<string>() { "choclate", "milk" }, make = new List<string>() { "mix", "bake" }, user = userList[0], picture = "20.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "ChoclateCake", recipeCategory = categoreyList[0], time = 25, level = 1, listIngrediens = new List<string>() { "sogar", "flour" },make = new List<string>() { "mix", "bake" }, user = userList[1], picture = "chhoc.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "DarkCake", recipeCategory = categoreyList[0], time = 65, level = 1, listIngrediens = new List<string>() { "sogar", "flour" },make = new List<string>() { "mix", "bake" }, user = userList[1], picture = "Creamcakes.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "GoAndDinner", recipeCategory = categoreyList[0], time = 20, level = 3, listIngrediens = new List<string>() { "Enclosure", "water" },make = new List<string>() { "mix", "cook" }, user = userList[1], picture = "DSC_8220.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "OreoCake", recipeCategory = categoreyList[0], time = 20, level = 3, listIngrediens = new List<string>() { "banana", "water" },make = new List<string>() { "mix", "cook" }, user = userList[1], picture = "images.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "Cheesebar", recipeCategory = categoreyList[0], time = 100, level = 3, listIngrediens = new List<string>() { "choclate", "milk" }, make = new List<string>() { "mix", "bake" }, user = userList[0], picture = "IMG-20151120-WA0002.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "Blueberry", recipeCategory = categoreyList[0], time = 5, level = 1, listIngrediens = new List<string>() { "sogar", "flour" },make = new List<string>() { "mix", "bake" }, user = userList[1], picture = "IMG-20151120-WA0002 (2).jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "Cookies", recipeCategory = categoreyList[1], time = 5, level = 1, listIngrediens = new List<string>() { "waterMakon", "flour" },make = new List<string>() { "mix", "bake" }, user = userList[1], picture = "IMG-20180624-WA0019.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "BluchCake", recipeCategory = categoreyList[0], time = 20, level = 3, listIngrediens = new List<string>() { "vanul", "water" },make = new List<string>() { "mix", "cook" }, user = userList[1], picture = "IMG-20180630-WA0003.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "RibaCookies", recipeCategory = categoreyList[1], time = 20, level = 3, listIngrediens = new List<string>() { "floor", "water" },make = new List<string>() { "mix", "cook" }, user = userList[1], picture = "Sugar-free-cookies-1.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "ClickCake", recipeCategory = categoreyList[0], time = 100, level = 2, listIngrediens = new List<string>() { "choclate", "milk" }, make = new List<string>() { "mix", "bake" }, user = userList[0], picture = "עוגת-אומברה-קפה-ושוקולד4.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "SupriseCake", recipeCategory = categoreyList[0], time = 5, level = 5, listIngrediens = new List<string>() { "sogar", "flour" },make = new List<string>() { "mix", "bake" }, user = userList[1], picture = "עוגת-שוקולד-הפתעות.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "FireCake", recipeCategory = categoreyList[0], time = 5, level = 5, listIngrediens = new List<string>() { "sogar", "milk" },make = new List<string>() { "mix", "bake" }, user = userList[1], picture = "פאי-לימון.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "cookies", recipeCategory = categoreyList[1], time = 5, level = 1, listIngrediens = new List<string>() { "sogar", "flour" },make = new List<string>() { "mix", "bake" }, user = userList[1], picture = "10-e1515259226996.jpg", status = true,dateInsert=DateTime.Now },
            new recipe() { recipeName = "FFCookies", recipeCategory = categoreyList[1], time = 5, level = 1, listIngrediens = new List<string>() { "water", "flour" },make = new List<string>() { "mix", "bake" }, user = userList[1], picture = "0883441001482917856.jpg", status = true,dateInsert=DateTime.Now },
         };
            ;
        }
        public int time { get; set; }
        public int level { get; set; }
        public DateTime dateInsert { get; set; }
        public List<string> listIngrediens { get; set; }
        public List<string> make { get; set; }
        public User user { get; set; }
        public string picture { get; set; }
        public Boolean status { get; set; }
    }
}