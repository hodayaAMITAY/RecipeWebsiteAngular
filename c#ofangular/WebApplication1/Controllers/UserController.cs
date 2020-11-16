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
    [EnableCors(methods: "*", headers: "*",origins: "*")]
    public class UserController:ApiController
    {
       public List<User> GetAllUser()
        {
            return Listuser.userList;
        }
        public IHttpActionResult Insert(User u)
        {
            Listuser.userList.Add(u);
            return Ok(u);
        }

        public IHttpActionResult LookForUser(User u)
        {

            foreach (User i in Listuser.userList)//chack about name and password
            {
                if (u.userName == i.userName)
                {
                    if (u.userPassword == i.userPassword)
                        return Ok(true);
                   
                    else
                        return Ok(u.userName);
                }
            }
            return Ok(false);
                
         }
        public  IHttpActionResult getallrecipe()
        {
            return Ok(Listuser.recipeList);
        }
    }   
}