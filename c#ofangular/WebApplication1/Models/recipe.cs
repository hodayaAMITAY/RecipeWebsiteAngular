using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class recipe
    {
        public string recipeName { get; set; }
        public categorey recipeCategory { get; set; }
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