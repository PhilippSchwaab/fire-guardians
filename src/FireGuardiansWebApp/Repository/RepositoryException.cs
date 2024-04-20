namespace FireGuardians.Repository;

public class RepositoryException : Exception
{
    private RepositoryException()
    {
    }

    private RepositoryException(string message) : base(message)
    {
    }

    private RepositoryException(string message, Exception inner) : base(message, inner)
    {
    }

    public static Exception QueryReturnedEmptyResultFailed()
    {
        return new RepositoryException("Query returned no result.");
    }

    public static Exception MutationReturnedEmptyResultFailed()
    {
        return new RepositoryException("Mutation returned no result.");
    }
}

