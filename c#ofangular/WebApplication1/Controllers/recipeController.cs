using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    public class recipeController : ApiController
    {
        public IHttpActionResult getallrecipe()
        {
            return Ok(Listuser.recipeList);
        }
        public recipe getDetails(string name)
        {
            foreach (recipe r in Listuser.recipeList)
            {
                if (name == r.recipeName)
                    return r;

            }
            return null;
        }
       public   IHttpActionResult addrecipe111(recipe l)
        {
            foreach (recipe r in Listuser.recipeList)
            {
                if (l.recipeName == r.recipeName)
                    return Ok("המתכון כבר קיים");

            }
            Listuser.recipeList.Add(l);
            return Ok("המתכון הוסף בהצלחה");
        }
        public IHttpActionResult eddit333(recipe t)
        {
            foreach (recipe r in Listuser.recipeList)
            {
                if (t.recipeName == r.recipeName)
                {
                    r.dateInsert = t.dateInsert;
                    r.level = t.level;
                    r.time = t.time;
                    r.user = t.user;
                    r.make = t.make;
                    r.picture = t.picture;
                    r.status = t.status;
                    r.listIngrediens = t.listIngrediens;
                    r.recipeCategory = t.recipeCategory;
            
                    return Ok("העדכון עודכן בהצלחה");
                }                  

            }
            return Ok("העדכון כבר התבצע");
        }
    }
}
