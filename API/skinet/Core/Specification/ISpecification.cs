using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Core.Specification
{
    public interface ISpecification<T>
    {
        Expression<Func<T, bool>> Creteria {get; set;}

        List<Expression<Func<T, object>>> Includes {get;}

        Expression<Func<T, object>> OrderByDescending {get;}
        Expression<Func<T, object>> OrderBy {get;}

        int Take {get;}
        int Skip {get;}
        bool isPagingEnabled {get;}
    }
}