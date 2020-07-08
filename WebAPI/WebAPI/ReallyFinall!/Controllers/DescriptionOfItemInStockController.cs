using Bll;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReallyFinall_.Controllers
{
    public class DescriptionOfItemInStockController : ApiController
    {
        [Route("api/DescriptionOfItemInStock/GetItemInStockNameListByItemId")]
        // GET: api/DescriptionOfItemInStock
        public IHttpActionResult GetItemInStockNameListByItemId(int itemId)
        {
            return Ok(DescriptionOfItemInStockFunctions.getItemInStockNameListByItemId(itemId));
        }

        // GET: api/DescriptionOfItemInStock/5
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Descreption
        [Route("api/DescreptionOfItemInStock/AddDiscreptionOfItemInStock")]
        public void AddDiscreptionOfItemInStock([FromBody] DescriptionOfItemInStockDTO descriptionOfItemInStockDTO)
        {
            DescriptionOfItemInStockFunctions.addDiscreptionOfItemInStock(descriptionOfItemInStockDTO);
        }

        // POST: api/DescriptionOfItemInStock
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/DescriptionOfItemInStock/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/DescriptionOfItemInStock/5
        public void Delete(int id)
        {
        }
    }
}
