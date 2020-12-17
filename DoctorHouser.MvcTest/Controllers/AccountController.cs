using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouser.MvcTest.Controllers
{
    public class AccountController : Controller
    {
        // GET: /Account/AccessDenied
        [HttpGet]
        [AllowAnonymous]
        public IActionResult AccessDenied(string returnUrl = null)
        {
            // workaround
            if (Request.Cookies["Identity.External"] != null)
            {
                return View();
            }
            return View();

        }
    }
}
