using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{   [EnableCors(methods: "*", headers: "*", origins: "*")]
    public class categoreyController : ApiController
    {
       public IHttpActionResult getallcategory()
        {
            return Ok(listcategorey.categoreyList);
        }
        [HttpPost]
        public categorey FindCategory(categorey name)
        {
            foreach (categorey c in Listuser.categoreyList)
                if (c.name == name.name)
                    return c;
            return null;
        }

    }
}
