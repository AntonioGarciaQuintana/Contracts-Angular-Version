using ContractsApplication.Models;
using ContractsApplication.Models.Enums;
using ContractsApplication.Service.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContractsApplication.Controllers
{
    public class PaymentController : Controller
    {
        private readonly IPaymentService IPaymentService;

        JsonSerializerSettings microsoftDateFormatSettings = new JsonSerializerSettings
        {
            DateFormatHandling = DateFormatHandling.MicrosoftDateFormat
        };

        public PaymentController(IPaymentService paymentService) {
            this.IPaymentService = paymentService;
        }


        [HttpPost]
        [Route("")]
        public JsonResult SavePayment(Payment model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Json(false, JsonRequestBehavior.AllowGet);
                }

                IPaymentService.SaveOrUpdatePayment(model);
                return Json(true, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public ActionResult GetAllPayment(int idContract, PaymentTypeEnum type)
        {
            try
            {
                var result = IPaymentService.GetAllPaymentContract(idContract,type);
                string microsoftJson = JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore });
                return new ContentResult { Content = microsoftJson, ContentType = "application/json" };
            }
            catch (Exception)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult GetAmountResumeByContract( int idContract, PaymentTypeEnum type)
        {
            try
            {
                var result = IPaymentService.GetAmountResumeByContract(idContract,type);
                string microsoftJson = JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore });
                return new ContentResult { Content = microsoftJson, ContentType = "application/json" };
            }
            catch (Exception)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpDelete]
        public ActionResult DeletePayment(int idPayment)
        {
            try
            {
                IPaymentService.DeletePayment(idPayment);
                return Json(true);
            }
            catch (Exception)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }


        [HttpGet]
        public ActionResult GetInforDashboard()
        {
            try
            {
                var result = IPaymentService.GetInfoDashboard();
                string microsoftJson = JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore });
                return new ContentResult { Content = microsoftJson, ContentType = "application/json" };
            }
            catch (Exception)
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }
    }
}