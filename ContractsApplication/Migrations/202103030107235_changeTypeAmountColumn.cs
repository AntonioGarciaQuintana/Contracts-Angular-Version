namespace ContractsApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeTypeAmountColumn : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Payments", "Amount", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Payments", "Amount", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
    }
}
