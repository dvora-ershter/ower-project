﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DataEntities : DbContext
    {
        public DataEntities()
            : base("name=DataEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Client> Client { get; set; }
        public virtual DbSet<DescriptionOfItem> DescriptionOfItem { get; set; }
        public virtual DbSet<DescriptionOfItemInStock> DescriptionOfItemInStock { get; set; }
        public virtual DbSet<DetailingOfValues> DetailingOfValues { get; set; }
        public virtual DbSet<FieldOfItemInStock> FieldOfItemInStock { get; set; }
        public virtual DbSet<Item> Item { get; set; }
        public virtual DbSet<ItemInStock> ItemInStock { get; set; }
        public virtual DbSet<KindOfField> KindOfField { get; set; }
        public virtual DbSet<PartOfItem> PartOfItem { get; set; }
    }
}
