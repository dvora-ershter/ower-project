//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class FieldOfItemInStock
    {
        public int FieldOfItemInStockId { get; set; }
        public int FieldOfItemId { get; set; }
        public int ItemInStockId { get; set; }
        public string Value { get; set; }
    
        public virtual ItemInStock ItemInStock { get; set; }
    }
}
