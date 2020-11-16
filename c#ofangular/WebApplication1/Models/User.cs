using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class User
    {
        public string userCode { get; set; }
        public string userName { get; set; }
        public string userAdrees { get; set; }
        public string Mail { get; set; }
        public int userPassword { get; set; }
    }
}