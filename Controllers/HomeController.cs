using Microsoft.AspNetCore.Mvc;

namespace CurriculumVitae.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
