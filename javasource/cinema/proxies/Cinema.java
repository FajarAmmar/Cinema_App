// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package cinema.proxies;

public class Cinema
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject cinemaMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "Cinema.Cinema";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Date("Date"),
		StartTime("StartTime"),
		EndTime("EndTime"),
		quota("quota"),
		CinemaCode("CinemaCode"),
		Cinema_Movie("Cinema.Cinema_Movie"),
		Cinema_Theatre("Cinema.Cinema_Theatre"),
		Cinema_Price("Cinema.Cinema_Price");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public Cinema(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected Cinema(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject cinemaMendixObject)
	{
		if (cinemaMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, cinemaMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.cinemaMendixObject = cinemaMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'Cinema.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static cinema.proxies.Cinema initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return cinema.proxies.Cinema.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static cinema.proxies.Cinema initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new cinema.proxies.Cinema(context, mendixObject);
	}

	public static cinema.proxies.Cinema load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return cinema.proxies.Cinema.initialize(context, mendixObject);
	}

	public static java.util.List<cinema.proxies.Cinema> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> cinema.proxies.Cinema.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * Commit the changes made on this proxy object.
	 * @throws com.mendix.core.CoreException
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 * @throws com.mendix.core.CoreException
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of Date
	 */
	public final java.util.Date getDate()
	{
		return getDate(getContext());
	}

	/**
	 * @param context
	 * @return value of Date
	 */
	public final java.util.Date getDate(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.Date.toString());
	}

	/**
	 * Set value of Date
	 * @param date
	 */
	public final void setDate(java.util.Date date)
	{
		setDate(getContext(), date);
	}

	/**
	 * Set value of Date
	 * @param context
	 * @param date
	 */
	public final void setDate(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date date)
	{
		getMendixObject().setValue(context, MemberNames.Date.toString(), date);
	}

	/**
	 * @return value of StartTime
	 */
	public final java.util.Date getStartTime()
	{
		return getStartTime(getContext());
	}

	/**
	 * @param context
	 * @return value of StartTime
	 */
	public final java.util.Date getStartTime(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.StartTime.toString());
	}

	/**
	 * Set value of StartTime
	 * @param starttime
	 */
	public final void setStartTime(java.util.Date starttime)
	{
		setStartTime(getContext(), starttime);
	}

	/**
	 * Set value of StartTime
	 * @param context
	 * @param starttime
	 */
	public final void setStartTime(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date starttime)
	{
		getMendixObject().setValue(context, MemberNames.StartTime.toString(), starttime);
	}

	/**
	 * @return value of EndTime
	 */
	public final java.util.Date getEndTime()
	{
		return getEndTime(getContext());
	}

	/**
	 * @param context
	 * @return value of EndTime
	 */
	public final java.util.Date getEndTime(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.EndTime.toString());
	}

	/**
	 * Set value of EndTime
	 * @param endtime
	 */
	public final void setEndTime(java.util.Date endtime)
	{
		setEndTime(getContext(), endtime);
	}

	/**
	 * Set value of EndTime
	 * @param context
	 * @param endtime
	 */
	public final void setEndTime(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date endtime)
	{
		getMendixObject().setValue(context, MemberNames.EndTime.toString(), endtime);
	}

	/**
	 * @return value of quota
	 */
	public final java.lang.Integer getquota()
	{
		return getquota(getContext());
	}

	/**
	 * @param context
	 * @return value of quota
	 */
	public final java.lang.Integer getquota(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.quota.toString());
	}

	/**
	 * Set value of quota
	 * @param quota
	 */
	public final void setquota(java.lang.Integer quota)
	{
		setquota(getContext(), quota);
	}

	/**
	 * Set value of quota
	 * @param context
	 * @param quota
	 */
	public final void setquota(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer quota)
	{
		getMendixObject().setValue(context, MemberNames.quota.toString(), quota);
	}

	/**
	 * @return value of CinemaCode
	 */
	public final java.lang.String getCinemaCode()
	{
		return getCinemaCode(getContext());
	}

	/**
	 * @param context
	 * @return value of CinemaCode
	 */
	public final java.lang.String getCinemaCode(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.CinemaCode.toString());
	}

	/**
	 * Set value of CinemaCode
	 * @param cinemacode
	 */
	public final void setCinemaCode(java.lang.String cinemacode)
	{
		setCinemaCode(getContext(), cinemacode);
	}

	/**
	 * Set value of CinemaCode
	 * @param context
	 * @param cinemacode
	 */
	public final void setCinemaCode(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String cinemacode)
	{
		getMendixObject().setValue(context, MemberNames.CinemaCode.toString(), cinemacode);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of Cinema_Movie
	 */
	public final cinema.proxies.Movie getCinema_Movie() throws com.mendix.core.CoreException
	{
		return getCinema_Movie(getContext());
	}

	/**
	 * @param context
	 * @return value of Cinema_Movie
	 * @throws com.mendix.core.CoreException
	 */
	public final cinema.proxies.Movie getCinema_Movie(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		cinema.proxies.Movie result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Cinema_Movie.toString());
		if (identifier != null) {
			result = cinema.proxies.Movie.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of Cinema_Movie
	 * @param cinema_movie
	 */
	public final void setCinema_Movie(cinema.proxies.Movie cinema_movie)
	{
		setCinema_Movie(getContext(), cinema_movie);
	}

	/**
	 * Set value of Cinema_Movie
	 * @param context
	 * @param cinema_movie
	 */
	public final void setCinema_Movie(com.mendix.systemwideinterfaces.core.IContext context, cinema.proxies.Movie cinema_movie)
	{
		if (cinema_movie == null) {
			getMendixObject().setValue(context, MemberNames.Cinema_Movie.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.Cinema_Movie.toString(), cinema_movie.getMendixObject().getId());
		}
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of Cinema_Theatre
	 */
	public final cinema.proxies.Theatre getCinema_Theatre() throws com.mendix.core.CoreException
	{
		return getCinema_Theatre(getContext());
	}

	/**
	 * @param context
	 * @return value of Cinema_Theatre
	 * @throws com.mendix.core.CoreException
	 */
	public final cinema.proxies.Theatre getCinema_Theatre(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		cinema.proxies.Theatre result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Cinema_Theatre.toString());
		if (identifier != null) {
			result = cinema.proxies.Theatre.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of Cinema_Theatre
	 * @param cinema_theatre
	 */
	public final void setCinema_Theatre(cinema.proxies.Theatre cinema_theatre)
	{
		setCinema_Theatre(getContext(), cinema_theatre);
	}

	/**
	 * Set value of Cinema_Theatre
	 * @param context
	 * @param cinema_theatre
	 */
	public final void setCinema_Theatre(com.mendix.systemwideinterfaces.core.IContext context, cinema.proxies.Theatre cinema_theatre)
	{
		if (cinema_theatre == null) {
			getMendixObject().setValue(context, MemberNames.Cinema_Theatre.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.Cinema_Theatre.toString(), cinema_theatre.getMendixObject().getId());
		}
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of Cinema_Price
	 */
	public final cinema.proxies.Price getCinema_Price() throws com.mendix.core.CoreException
	{
		return getCinema_Price(getContext());
	}

	/**
	 * @param context
	 * @return value of Cinema_Price
	 * @throws com.mendix.core.CoreException
	 */
	public final cinema.proxies.Price getCinema_Price(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		cinema.proxies.Price result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Cinema_Price.toString());
		if (identifier != null) {
			result = cinema.proxies.Price.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of Cinema_Price
	 * @param cinema_price
	 */
	public final void setCinema_Price(cinema.proxies.Price cinema_price)
	{
		setCinema_Price(getContext(), cinema_price);
	}

	/**
	 * Set value of Cinema_Price
	 * @param context
	 * @param cinema_price
	 */
	public final void setCinema_Price(com.mendix.systemwideinterfaces.core.IContext context, cinema.proxies.Price cinema_price)
	{
		if (cinema_price == null) {
			getMendixObject().setValue(context, MemberNames.Cinema_Price.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.Cinema_Price.toString(), cinema_price.getMendixObject().getId());
		}
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return cinemaMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final cinema.proxies.Cinema that = (cinema.proxies.Cinema) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return entityName;
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
