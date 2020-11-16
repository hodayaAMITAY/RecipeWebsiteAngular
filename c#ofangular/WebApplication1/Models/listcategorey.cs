using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public static class listcategorey
    {
        public static List<categorey> categoreyList;
        static listcategorey()
        {
            categoreyList = new List<categorey>() {
            new categorey() { code = 145,name = "dough",Icon = "notfound"},
            new categorey() { code = 009,name = "bake",Icon = "notfound"}
        };
        }
}
}