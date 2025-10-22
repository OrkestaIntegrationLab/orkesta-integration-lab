namespace Orkesta.API.ViewModels.Client
{
    public class ClientViewModel
    {
        public int IdClient { get; set; }
        public int IdDocumentType { get; set; }
        public string DocumentNumber { get; set; }
        public string DocumentTypeName { get; set; }
        public string DocumentIdentifier { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
    }
}
